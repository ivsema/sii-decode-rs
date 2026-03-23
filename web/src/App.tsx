import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import DecodeWorker from "./decode.worker?worker";
import type { DecodeResponse } from "./decode.worker";


type PreparedBlockInfo = {
  id: string;
  name: string;
  description: string; 
  file: string;
  map_path: string;
};


function App() {
  const [file, setFile] = useState<File | null>(null);
  //const [cleanField, setCleanField] = useState(""); // для ввода имени поля
  const [decodedText, setDecodedText] = useState(""); // для хранения декодированного текста
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const [preparedBlocks, setPreparedBlocks] = useState<PreparedBlockInfo[]>([]);
  const [status, setStatus] = useState<string>("Загрузите свой профиль");
  const [statusType, setStatusType] = useState<"info" | "success" | "error">("info");
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [isReadyToDownload, setIsReadyToDownload] = useState(false);
  const [presetLocked, setPresetLocked] = useState(false);
  const [testMode, setTestMode] = useState(false);
  
const selectedTemplate =  preparedBlocks.find((b) => b.id === selectedTemplateId) ?? null;

  // Инициализация воркера
  useEffect(() => {
    workerRef.current = new DecodeWorker();
    return () => {
      workerRef.current?.terminate();
    };
  }, []);
  
	useEffect(() => {
	  if (!selectedTemplateId) return;

	  // Это выполнится КАЖДЫЙ раз при изменении выбранного шаблона
	  setIsReadyToDownload(false);

	  if (downloadRef.current?.href && downloadRef.current.href !== "#") {
		URL.revokeObjectURL(downloadRef.current.href);
		downloadRef.current.href = "#";
	  }
	  if(file) updateStatus("Шаблон изменён. Требуется применение.");

	  
	}, [selectedTemplateId]);
	  
	useEffect(() => {
	  const controller = new AbortController();

	  const load = async () => {
		try {
			const url = new URL("preparedBlocks/index.json", document.baseURI);

			const res = await fetch(url, {
			  cache: "no-store",
			  signal: controller.signal
			});

		  if (!res.ok) {
			console.error("Failed to load index.json:", res.status);
			return;
		  }

		  const list: PreparedBlockInfo[] = await res.json();

		  console.log("Loaded preparedBlocks:", list);

		  setPreparedBlocks(list);

		  if (list.length > 0) {
			setSelectedTemplateId(list[0].id);
		  }
		} catch (err: any) {
		  if (err.name === "AbortError") {
			// это нормально при StrictMode
			return;
		  }
		  console.error("Load error:", err);
		}
	  };

	  load();

	  return () => {
		controller.abort(); // корректно отменяет первый вызов StrictMode
	  };
	}, []);
	
	
	useEffect(() => {
	  const params = new URLSearchParams(window.location.search);
	  const presetFromUrl = params.get("preset");

	  if (presetFromUrl) {

		  // проверяем что такой пресет существует
		  const found = preparedBlocks.find(
			(b) => b.id === presetFromUrl
		  );

		  if (found) {
			setSelectedTemplateId(found.id);
			setPresetLocked(true);

			updateStatus(
			  `Пресет зафиксирован из ссылки:\n${found.name}`,
			  "info"
			);
		  } else {
			updateStatus(
			  `Пресет "${presetFromUrl}" не найден`,
			  "error"
			);
		}
	}
	const testParam = params.get("testmode");

	if (testParam === "1" || testParam === "true") {
		setTestMode(true);
	} else {
		setTestMode(false);
	}
		  
	  
	}, [preparedBlocks]);



	const extractMapPath = (content: string): string | null => {
	  const match = content.match(/map_path:\s*"([^"]+)"/);
	  return match ? match[1] : null;
	};

  // Обработка выбора файла
  const handleFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }
      const selectedFile = event.target.files[0];
	  setIsReadyToDownload(false);

      if (textAreaRef.current) {
        textAreaRef.current.value = "Decoding...";
		updateStatus("Декодирование профиля...");
      }
      if (downloadRef.current) {
        if (downloadRef.current.href !== "#") {
          URL.revokeObjectURL(downloadRef.current.href);
        }
        downloadRef.current.href = "#";
      }
      setFile(selectedFile);
    },
    []
  );

  // Обработка декодирования файла
  useEffect(() => {
    if (!file || !workerRef.current) return;

    const worker = workerRef.current;

    const handleMessage = (event: MessageEvent<DecodeResponse>) => {
      if (event.data.type === "success") {
        const { result, blobUrl } = event.data;
        setDecodedText(result);
        if (textAreaRef.current) {
          const PREVIEW_LIMIT = 100_000;
          if (result.length > PREVIEW_LIMIT) {
            textAreaRef.current.value =
              result.slice(0, PREVIEW_LIMIT) +
              `\n\n... (${(result.length / 1024 / 1024).toFixed(2)} MB total - download for full content)`;
          } else {
            textAreaRef.current.value = result;
          }
        }
        if (downloadRef.current) {
          downloadRef.current.href = blobUrl;
          downloadRef.current.download = file.name.replace(
            ".sii",
            "-decoded.sii"
          );
        }
		updateStatus("Профиль успешно загружен. \n Выберете шаблон и нажмите применить.", "success");
      } else if (event.data.type === "error") {
	    updateStatus(`Ошибка декодирования: ${event.data.message}`, "error");
        if (textAreaRef.current) {
          textAreaRef.current.value = `Error: ${event.data.message}`;
        }
      }
    };

    worker.addEventListener("message", handleMessage);

    const reader = new FileReader();
    reader.onload = (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      worker.postMessage({ type: "decode", buffer: arrayBuffer }, [arrayBuffer]);
    };
    reader.readAsArrayBuffer(file);

    return () => {
      worker.removeEventListener("message", handleMessage);
    };
  }, [file]);
  
	const updateStatus = (text: string, type: "info" | "success" | "error" = "info") => {
	  setStatus(text);
	  setStatusType(type);
	};	


	/*const loadPreparedBlocksList = async (): Promise<PreparedBlockInfo[]> => {
	  //const BASE = import.meta.env.BASE_URL;

	  const url = `${BASE}/preparedBlocks/index.json`;
	  console.log("Loading:", url);

	  const res =  fetch(url, { cache: "no-store" });

	  console.log("Response:", res);

	  const text =  res.text();
	  console.log("RAW index.json:", text);

	  const json = JSON.parse(text);
	  console.log("PARSED:", json);

	  return json;
	};*/

	const loadPreparedBlock = async (file: string): Promise<string> => {
	  
	  		const url = new URL(`preparedBlocks/${file}`, document.baseURI);
		const res = await fetch(url, {
		  cache: "no-store"
		});

	  if (!res.ok) {
	  	updateStatus(`Не возможно загрузить шаблон ${file}`, "error");
		throw new Error(`Не возможно загрузить шаблон ${file}`);
	  }

	  return await res.text();
	};
	
	const validatePreparedBlock = (rawText: string): string | null => {
	  if (!rawText) {
		return "Файл шаблона пуст";
	  }

	  // Убираем BOM (часто появляется из Notepad)
	  const text = rawText.replace(/^\uFEFF/, "");

	  // Разбиваем на строки
	  const lines = text.split(/\r?\n/);

	  // Ищем первую НЕ пустую строку
	  const firstMeaningfulLine = lines.find((l) => l.trim().length > 0);

	  if (!firstMeaningfulLine) {
		return "Файл не содержит данных";
	  }

	  // Проверяем заголовок active_mods (разрешаем пробелы в начале)
	  if (!/^\s*active_mods:\s*\d+/.test(firstMeaningfulLine)) {
		return "Первая содержательная строка должна быть 'active_mods: N'";
	  }

	  // Проверяем наличие элементов списка
	  const hasItems = /^\s*active_mods\[\d+\]:\s*".*?"$/m.test(text);
	  if (!hasItems) {
		return "В шаблоне отсутствуют строки active_mods[i]";
	  }

	  return null;
	};

  const handleCleanField = async () => {
    if (!decodedText || !selectedTemplate) return;


	
    const profileMapPath = extractMapPath(decodedText);

    if (!profileMapPath) {
      updateStatus("В профиле не найден map_path", "error");
      return;
    }

    if (profileMapPath !== selectedTemplate.map_path) {
      updateStatus(
        `map_path не совпадает!\n\nПрофиль: ${profileMapPath}\nШаблон: ${selectedTemplate.map_path}`,
		"error"
      );
      return;
    }

    // ✔ map_path совпал — можно применять
    const preparedBlock = await loadPreparedBlock(selectedTemplate.file);
	
	const validationError = validatePreparedBlock(preparedBlock);
	if (validationError) {
	  updateStatus(`Ошибка preparedBlock:\n${validationError}`, "error");
	  return;
	}
	

	

const newContent = decodedText
	.replace(
    /active_mods:\s*\d+[\r\n]+(?:\s*active_mods\[\d+\]:\s*".*?"[\r\n]+)*/g,
    preparedBlock
  );

    // Обновляем отображение и ссылку на скачивание
    setDecodedText(newContent);
	updateStatus('Моды успешно выставлены в профиль.\r\nПрофиль можно скачать по ссылке выше', "success");
    // Создаем новый Blob и URL
    const blob = new Blob([newContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
	setIsReadyToDownload(true);
    if (downloadRef.current) {
      if (downloadRef.current.href && downloadRef.current.href !== "#") {
        URL.revokeObjectURL(downloadRef.current.href);
      }
      downloadRef.current.href = url;
      downloadRef.current.download = file?.name ?? "profile.sii";
    }
  };

  return (
    <>
      <h1>Установщик модов для профиля ETS 2 и ATS</h1>
	  
	    <p>1. В игре создать, либо выбрать профиль для установки модов.</p>

  <p>2. В настройке карьеры отключить синхронизацию с облаком стим(ее можно будет вернуть позднее).</p>

  <p>3. Нажать продолжить карьеру,запуститься и нажать "система","выход."</p>

  <p>4. В проводнике:</p>
  <p><code>Документы/Euro Truck Simulator 2/profiles</code></p>
  <p>сортировать по дате изменения (открыть самую новую папку с профилем)</p>
  <p>загрузите файл profile.sii      {/* Загрузка файла */}
      <input
        type="file"
        accept=".sii"
        onChange={handleFile}
        style={{ marginBottom: '10px' }}
      /></p>

  <p>5. Выбираем шаблон</p>
  
        <div style={{ marginTop: '20px' }}>
		<div style={{ marginBottom: "10px" }}>
		  <label>Шаблон active_mods: </label>
		  <select
			value={selectedTemplateId}
			disabled={presetLocked}
			onChange={(e) => setSelectedTemplateId(e.target.value)}
			style={{ marginLeft: "10px" }}
		  >
			{preparedBlocks.map(b => (
			  <option key={b.id} value={b.id}>
				{b.name}
			  </option>
			))}
		  </select>
		</div>
		
				<div
		  style={{
			marginTop: "15px",
			padding: "8px 12px",
			borderRadius: "6px",
			background: "#f3f3f3",
			color: "#333",
			fontSize: "1.1em",
			border: "1px solid #ddd",
			whiteSpace: "pre-line"
		  }}
		>
		  <strong>Описание: </strong>
		
		
		{selectedTemplate && 		
			selectedTemplate.description
		 
		}
		</div>

  <p>6. Нажимаем  {' '}       <button onClick={handleCleanField} style={{ marginLeft: '10px' }}>
          Применить
        </button>
      </p>
	  </div>

  <p>7.{' '}  
        {/* Ссылка для скачивания */}
	  {!isReadyToDownload && <span> Проверьте "статус"</span>}
        <a href="#" ref={downloadRef} data-testid="file-download"  
		style={{
		  display: isReadyToDownload ? "inline" : "none",
		}}>
          Скачать профиль
        </a>
  </p>

  <p>8. Переименовываем скачанный файл в <code>profile.sii</code> (при необходимости)</p>

  <p>9. Вставляем его с заменой в папку, откуда загружали на сайт файл profile.sii</p>

  <p>10. Заходим в игру,в модификации,</p>

  <p>11. Проверяем, что бы в активных модификациях (колонка справа) не было модов с красным вослицательным знаком.</p>

  <p>12. Если всё в порядке, (красных модов нет),можно запускать игру.</p>

  <p>13. При наличии "красных" модов справа, исправить вручную.</p>
   
  <p>14. Не забудьте вернуть синхронизацию профиля с облаком стим.</p>
	  
      




		<div
		  style={{
			marginTop: "15px",
			padding: "8px 12px",
			borderRadius: "6px",
			background:
			  statusType === "error"
				? "#ffe5e5"
				: statusType === "success"
				? "#e6ffed"
				: "#f3f3f3",
			color:
			  statusType === "error"
				? "#a40000"
				: statusType === "success"
				? "#1a7f37"
				: "#333",
			fontSize: "1.1em",
			border: "1px solid #ddd",
			whiteSpace: "pre-line"
		  }}
		>
		  <strong>Статус:</strong> {status}
		</div>
      {/* Отображение результата */}
      <textarea
        id="output"
        rows={20}
        cols={50}
        ref={textAreaRef}
        value={decodedText}
        data-testid="file-display"
        spellCheck="false"
        readOnly
        style={{ marginTop: '10px',  display: testMode ? "inline-block" : "none" }}
      />


      
      <p className="footer">
        Ваш профиль не загружается ни на какой сервер, все изменения выполяются в вашем браузере.
		<br/> 
		Но не изменяют выбраный вами профиль, а лиш предлагает скачать измененную версию.
        <br />
        This tools is{" "}
        <a href="https://github.com/ivsema/sii-decode-rs">open source</a>.
        If you encounter any issues, please report them{" "}
        <a href="https://github.com/ivsema/sii-decode-rs/issues">
          on GitHub
        </a>
        .
      </p>
    </>
  );
}

export default App;
