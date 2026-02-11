import { useRef, useState } from "react";

function App() {
  const data = useRef();
  const [response, setResponse] = useState("");
  const handleWrite = () => {
    fetch("http://localhost:5000/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ data: data.current.value }),
    });
    console.log(data.current.value);
  };

  const handleRead = () => {
    fetch("http://localhost:5000/read", {
      method: "GET",
      datatype: "json",
    })
      .then((res) => res.text())
      .then((data) => {
        setResponse(data);
      });
  };
  return (
    <div className="flex flex-col justify-center p-5 m-5">
      <h1 className="text-center text-4xl text-red">FS Module for Node</h1>
      <input ref={data} type="text" placeholder="Enter file data" />
      <div className="flex gap-5">
        <button
          onClick={handleWrite}
          className="px-6 py-4 bg-red-500 text-white"
        >
          Write to file
        </button>
        <button
          onClick={handleRead}
          className="px-6 py-4 bg-red-500 text-white"
        >
          Read from file
        </button>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl text-blue-500">Response:</h2>
        <p className="text-lg">{response}</p>
      </div>
    </div>
  );
}

export default App;
