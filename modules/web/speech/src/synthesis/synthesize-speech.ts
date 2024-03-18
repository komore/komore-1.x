import { isObservable, of } from '@komore/reactive';

type SpeechType = string | SpeechSynthesisUtterance;

/**
 * Synthesizes speech
 *
 * @param speech
 * @returns
 */
export function synthesizeSpeech(speech: SpeechType | Observable<SpeechType>): Observable<any> {
  const speech$ = isObservable(speech) ? speech : of(speech);

  return new Observable(subscriber => {
    speech$.subscribe(subscriber);
  });
}
