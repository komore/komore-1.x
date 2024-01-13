/**
 * Returns the speech recognition class, if available
 *
 * @returns Speech recognition class
 */
export function getSpeechRecognitionClass(): new () => SpeechRecognition {
  return window.SpeechRecognition ?? window.webkitSpeechRecognition;
}
