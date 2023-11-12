import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAnalysisButtonClick = () => {
    // Placeholder for image analysis logic
    console.log(`Analyzing image with URL: ${inputValue}`);
  };

  const handleGenerationButtonClick = () => {
    // Placeholder for image generation logic
    console.log(`Generating image with prompt: ${inputValue}`);
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
      <button onClick={handleGenerationButtonClick}>Generate Image</button>
    </div>
  );
}

export default App;
