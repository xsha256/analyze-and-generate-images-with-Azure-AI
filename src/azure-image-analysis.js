const ANALYZE_IMAGE_ENDPOINT = "https://mainaihlrwpsa.cognitiveservices.azure.com/";
const SUBSCRIPTION_KEY = "71baab76995f47d7a1f60bf64192ea90";

if (!ANALYZE_IMAGE_ENDPOINT || !SUBSCRIPTION_KEY) {
  throw new Error('Azure endpoint and subscription key must be provided.');
}

async function analyzeImage(imageUrl) {
  const params = {
    visualFeatures: 'Categories,Description,Color',
    details: 'Celebrities,Landmarks',
    language: 'en',
  };

  const response = await fetch(`${ANALYZE_IMAGE_ENDPOINT}?${new URLSearchParams(params)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY,
    },
    body: JSON.stringify({ url: imageUrl }),
  });

  if (!response.ok) {
    throw new Error(`Error analyzing image: ${response.statusText}`);
  }

  return response.json();
}

export default analyzeImage;