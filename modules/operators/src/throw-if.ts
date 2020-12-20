import { MonoTypeOperatorFunction, OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";

export function throwIf<T, S extends T>(predicate: (value: T, index: number) => value is S, errorFactory: (value: S) => any): OperatorFunction<T, S>;
export function throwIf<T>(predicate: (value: T, index: number) => boolean, errorFactory: (value: T) => any): MonoTypeOperatorFunction<T>;

export function throwIf<T>(condition: (value: T, index: number) => boolean, errorFactory: (value: T) => any): MonoTypeOperatorFunction<T> {
  return map((value, index) => {
    if (condition(value, index)) {
      const error = errorFactory(value);
      throw error;
    }

    return value;
  })
    return operate((source, subscriber) => {
      source.subscribe(
        new OperatorSubscriber(subscriber, (value) => {
          condition(value) ? subscriber.error(errorFactory(value)) : subscriber.next(value);
        })
      );
    });
  }
  

  export function filter<T, S extends T>(predicate: (value: T, index: number) => value is S, thisArg?: any): OperatorFunction<T, S>;
// NOTE(benlesh): T|null|undefined solves the issue discussed here: https://github.com/ReactiveX/rxjs/issues/4959#issuecomment-520629091
export function filter<T>(predicate: BooleanConstructor): OperatorFunction<T | null | undefined, NonNullable<T>>;
export function filter<T>(predicate: (value: T, index: number) => boolean, thisArg?: any): MonoTypeOperatorFunction<T>;
/* tslint:enable:max-line-len