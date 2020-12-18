import { Observable, of, PartialObserver, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

type X = (a: number, b: boolean) => string;

describe.only('some test', () => {
  it('works', () => {
    of(1, 2, 3)
    const subject = new Subject<Parameters<X>>();

    subject.pipe(
      map((value, text) => `${value}.${text}`)
    )
    const x = new Observable<string>(observer => {
      console.log('called with observer', observer);
      return () => console.log('aaaand done');
    });

    const observer: PartialObserver<string> = {
      next(value) {
        console.log('next called', value);
      },
      error(error) {
        console.log('error called', error);
      },
      complete() {
        console.log('complete called');
      }
    };
    const sub = new Subject<string>();

    console.log('1');
    x.subscribe();
    console.log('2');
    x.pipe().subscribe();
    console.log('3');
    x.subscribe(observer);
    console.log('4');
    x.pipe().subscribe(observer);
    console.log('5');
    x.subscribe(sub);
    console.log('6');
    x.pipe().subscribe(sub);
    console.log('7');
    sub.subscribe();
    console.log('8');
    sub.subscribe(observer);
    console.log('9');
    sub.pipe().subscribe(observer);
  });
});
