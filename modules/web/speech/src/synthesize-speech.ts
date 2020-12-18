import { isObservable, Observable, of } from 'rxjs';

type SpeechType = string | SpeechSynthesisUtterance;

export function synthesizeSpeech(speech: SpeechType | Observable<SpeechType>): Observable<any> {
  const speech$ = isObservable(speech) ? speech : of(speech);

  return new Observable(subscriber => {
    const subscription = speech$.subscribe();

    subscription.add(() => );

    return subscription;
  });
}
