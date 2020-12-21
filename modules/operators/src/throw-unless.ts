import { MonoTypeOperatorFunction, OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";

export function throwUnless<T, S extends T>(predicate: (value: T, index: number) => value is S, errorFactory: (value: T) => any): OperatorFunction<T, S>;
export function throwUnless<T>(predicate: (value: T, index: number) => boolean, errorFactory: (value: T) => any): MonoTypeOperatorFunction<T>;

export function throwIf<T>(condition: (value: T, index: number) => boolean, errorFactory: (value: T) => any): MonoTypeOperatorFunction<T> {
  return map((value, index) => {
    if (condition(value, index)) {
      const error = errorFactory(value);
      throw error;
    }

    return value;
  })