import { isObservable, Observable, of } from '@komore/reactive';

type SpeechType = string | SpeechSynthesisUtterance;

export function synthesizeSpeech(speech: SpeechType | Observable<SpeechType>): Observable<any> {
  const speech$ = isObservable(speech) ? speech : of(speech);

  return new Observable(subscriber => {
    speech$.subscribe(subscriber);
  });
}
