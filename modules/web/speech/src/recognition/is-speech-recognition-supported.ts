/**
 * Tests whether speech recognition is supported
 *
 * @returns true if speech recognition is supported
 */
export function isSpeechRecognitionSupported(): boolean {
  return (window.SpeechRecognition ?? window.webkitSpeechRecognition) !== undefined;
}
