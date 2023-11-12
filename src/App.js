// App.js
import React, { useState } from "react";
import analyzeImage from "./azure-image-analysis";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAnalysisButtonClick = async () => {
    try {
      const result = await analyzeImage(inputValue);
      setAnalysisResult(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Image Analysis and Generation App</h1>
      <label>
        Enter Image URL or Prompt:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleAnalysisButtonClick}>Analyse Image</button>

      {analysisResult && (
        <div>
          <h2>Analysis Result:</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
