import { type SpeechRecognitionConfig } from './speech-recognition-config';

export function applySpeechRecognitionConfig(
  config: SpeechRecognitionConfig
): (speechRecognition: SpeechRecognition) => void {
  // TODO: proper typings, no casts
  return speechRecognition => {
    for (const key in config) {
      const propertyKey = key as keyof SpeechRecognitionConfig;
      const propertyValue = config[propertyKey];
      if (propertyValue !== undefined) {
        (speechRecognition[propertyKey] as typeof propertyValue) = propertyValue;
      }
    }
  };
}
