import { fromEvent, merge, Observable, throwError } from 'rxjs';
import { mergeMap, share, takeUntil } from 'rxjs/operators';

// TODO: remove once added to libdom.d.ts
declare global {
  interface SpeechRecognition {
    serviceURI: string;
  }
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
 * Turns speech recognition into an observable stream of events
 * @param options Options
 * @returns Observable stream of events
 */
// TODO: watchSpeech?
export function recognizeSpeech(options?: RecognizeSpeechOptions): Observable<SpeechRecognitionEvent | Event> {
  return new Observable(subscriber => {
    const SpeechRecognition = globalThis.SpeechRecognition ?? (globalThis as any).webkitSpeechRecognition;
    const speechRecognition = new SpeechRecognition();
    const events: Array<Observable<SpeechRecognitionEvent> | Observable<Event>> = [];

    if (options?.config !== undefined) {
      configureSpeechRecognition(speechRecognition, options.config);
    }

    events.push(
      fromEvent<ErrorEvent>(speechRecognition, 'error').pipe(mergeMap(error => throwError(() => error))),
      fromEvent<SpeechRecognitionEvent>(speechRecognition, 'nomatch'),
      fromEvent<SpeechRecognitionEvent>(speechRecognition, 'result')
    );

    if (options?.events !== undefined) {
      if (options.events.audio) {
        events.push(fromEvent(speechRecognition, 'audiostart'), fromEvent(speechRecognition, 'audioend'));
      }

      if (options.events.sound) {
        events.push(fromEvent(speechRecognition, 'soundstart'), fromEvent(speechRecognition, 'soundend'));
      }

      if (options.events) {
        events.push(fromEvent(speechRecognition, 'speechstart'), fromEvent(speechRecognition, 'speechend'));
      }
    }

    const subscription = merge(...events)
      .pipe(
        share(),
        takeUntil(fromEvent(speechRecognition, 'end'))
      )
      .subscribe(subscriber);

    speechRecognition.start();

    subscription.add(() => (options?.abort ? speechRecognition.abort() : speechRecognition.stop()));

    return subscription;
  });
}
