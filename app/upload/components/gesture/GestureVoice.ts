export const speak = (text: string) => {
  if (typeof window === "undefined") return;
  if (!("speechSynthesis" in window)) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  utterance.rate = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};