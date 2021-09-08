import type { OperatorFunction } from '@komore/reactive';
import { pipe, withLatestFrom } from '@komore/reactive/operators';
import type { ValueWithAttributes } from './value-with-attributes';
import type { ValueWithElement } from './value-with-element';

export function withAttribute<T extends ValueWithElement<any>, AttributeNames extends string[]>(
  ...attributeNames: AttributeNames
): OperatorFunction<T, T & ValueWithAttributes<AttributeNames>> {
  return pipe(withLatestFrom());
}
