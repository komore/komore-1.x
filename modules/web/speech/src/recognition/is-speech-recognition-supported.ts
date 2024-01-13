export function isSpeechRecognitionSupported(): boolean {
  return (window.SpeechRecognition ?? window.webkitSpeechRecognition) !== undefined;
}
