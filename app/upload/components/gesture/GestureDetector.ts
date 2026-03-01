const API_BASE_URL = "http://localhost:5001";

export const detectGesture = async (imageData: string) => {
  const response = await fetch(`${API_BASE_URL}/api/gesture/detect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: imageData }),
  });

  return await response.json();
};