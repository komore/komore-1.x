import { fromEvent, map, mapToError, merge, Observable, share, takeUntil } from '@komore/reactive';

import { getSpeechRecognitionClass } from './get-speech-recognition-class';
import { type SpeechRecognitionOptions } from './speech-recognition-options';
import { applySpeechRecognitionConfig } from './apply-speech-recognition-config';

/**
 * Creates an observable that emits speech recognition events
 *
 * @param recognitionOptions Speech recognition options
 * @returns Observable stream of speech recognition events
 */
export function observeSpeech(
  recognitionOptions?: SpeechRecognitionOptions
): Observable<SpeechRecognitionEvent | Event> {
  const SpeechRecognition = getSpeechRecognitionClass();
  const options = recognitionOptions ?? {};
  const { abort = false, config = {} } = options;
  const { audio = false, sound = false, speech = false } = options.events ?? {};
  const applyConfig = applySpeechRecognitionConfig(config);
  const additionalEvents: ReadonlyArray<(speechRecognition: SpeechRecognition) => Observable<Event>> = [
    ...(audio ? [fromSpeechRecognitionEvent('audiostart'), fromSpeechRecognitionEvent('audioend')] : []),
    ...(sound ? [fromSpeechRecognitionEvent('soundstart'), fromSpeechRecognitionEvent('soundend')] : []),
    ...(speech ? [fromSpeechRecognitionEvent('speechstart'), fromSpeechRecognitionEvent('speechend')] : []),
  ];

  return new Observable(subscriber => {
    const speechRecognition = new SpeechRecognition();
    const error$ = fromEvent(speechRecognition, 'error').pipe(map(event => event as ErrorEvent));
    const end$ = fromEvent(speechRecognition, 'end');
    const noMatch$ = fromEvent(speechRecognition, 'nomatch').pipe(map(event => event as SpeechRecognitionEvent));
    const result$ = fromEvent(speechRecognition, 'result').pipe(map(event => event as SpeechRecognitionEvent));

    merge([
      error$.pipe(mapToError()),
      noMatch$,
      result$,
      ...additionalEvents.map(factory => factory(speechRecognition)),
    ])
      .pipe(share(), takeUntil(end$))
      .subscribe(subscriber);
    subscriber.add(() => (abort ? speechRecognition.abort() : speechRecognition.stop()));

    applyConfig(speechRecognition);

    speechRecognition.start();
  });
}

function fromSpeechRecognitionEvent(eventName: string): (speechRecognition: SpeechRecognition) => Observable<Event> {
  return speechRecognition => fromEvent(speechRecognition, eventName);
}
