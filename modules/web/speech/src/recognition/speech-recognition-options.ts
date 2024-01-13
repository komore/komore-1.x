import { type SpeechRecognitionConfig } from './speech-recognition-config';

/**
 * Speech recognition options
 */
export interface SpeechRecognitionOptions {
  readonly abort?: boolean;
  readonly config?: SpeechRecognitionConfig;
  readonly events?: {
    readonly audio?: boolean;
    readonly sound?: boolean;
    readonly speech?: boolean;
  };
}
