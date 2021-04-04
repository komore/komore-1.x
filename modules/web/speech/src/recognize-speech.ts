import { fromEvent, merge, Observable, throwError } from '@komore/reactive';
import { mergeMap, share, takeUntil } from '@komore/reactive/operators';

// TODO: remove once added to libdom.d.ts
declare global {
  interface SpeechRecognition {
    serviceURI: string;
  }

  const webkitSpeechRecognition: unknown;
}

/**
 * Spech recognition configuration
 */
type SpeechRecognitionConfig = Readonly<
  Partial<
    Pick<SpeechRecognition, 'continuous' | 'grammars' | 'interimResults' | 'lang' | 'maxAlternatives' | 'serviceURI'>
  >
>;

/**
 * Recognize speech options
 */
export type RecognizeSpeechOptions = Readonly<{
  abort?: boolean;
  config?: SpeechRecognitionConfig;
  events?: Readonly<{
    audio?: boolean;
    sound?: boolean;
    speech?: boolean;
  }>;
}>;

const configKeys: ReadonlyArray<keyof SpeechRecognitionConfig> = [
  'continuous',
  'grammars',
  'lang',
  'interimResults',
  'maxAlternatives',
  'serviceURI'
];

function configureSpeechRecognition(speechRecognition: SpeechRecognition, config: SpeechRecognitionConfig): void {
  for (const configKey of configKeys) {
    const configValue = config[configKey];
    if (configValue !== undefined) {
      // TODO: figure out why the cast is necessary
      (speechRecognition[configKey] as typeof configValue) = configValue;
    }
  }
}

/**
 * Creates an observable that emits speech recognition events
 * @param options Speech recognition options
 * @returns Observable stream of speech recognition events
 */
export function recognizeSpeech(options?: RecognizeSpeechOptions): Observable<SpeechRecognitionEvent | Event> {
  return new Observable(subscriber => {
    const SpeechRecognition = globalThis.SpeechRecognition ?? (globalThis as any).webkitSpeechRecognition;
    const speechRecognition = new SpeechRecognition();

    if (options?.config !== undefined) {
      configureSpeechRecognition(speechRecognition, options.config);
    }

    const recognitionErrored = fromEvent<ErrorEvent>(speechRecognition, 'error');
    const recognitionEnds = fromEvent(speechRecognition, 'end');
    const recognitionDidNotMatch = fromEvent<SpeechRecognitionEvent>(speechRecognition, 'nomatch');
    const recognitionResult = fromEvent<SpeechRecognitionEvent>(speechRecognition, 'result');
    const events: Array<Observable<SpeechRecognitionEvent> | Observable<Event>> = [
      recognitionErrored.pipe(mergeMap(error => throwError(() => error))),
      recognitionDidNotMatch,
      recognitionResult
    ];

    if (options?.events !== undefined) {
      const { audio, sound, speech } = options.events;

      if (audio) {
        const audioStarts = fromEvent(speechRecognition, 'audiostart');
        const audioEnds = fromEvent(speechRecognition, 'audioend');
        events.push(audioStarts, audioEnds);
      }

      if (sound) {
        const soundStarts = fromEvent(speechRecognition, 'soundstart');
        const soundEnds = fromEvent(speechRecognition, 'soundend');
        events.push(soundStarts, soundEnds);
      }

      if (speech) {
        const speechStarts = fromEvent(speechRecognition, 'speechstart');
        const speechEnds = fromEvent(speechRecognition, 'speechend');
        events.push(speechStarts, speechEnds);
      }
    }

    const subscription = merge(events).pipe(share(), takeUntil(recognitionEnds)).subscribe(subscriber);

    speechRecognition.start();

    subscription.add(() => (options?.abort ? speechRecognition.abort() : speechRecognition.stop()));

    return subscription;
  });
}
