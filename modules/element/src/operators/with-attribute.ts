import { OperatorFunction, pipe } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { ValueWithAttributes } from './value-with-attributes';
import { ValueWithElement } from './value-with-element';

export function withAttribute<T extends ValueWithElement<any>, AttributeNames extends string[]>(...attributeNames: AttributeNames): OperatorFunction<T, T & ValueWithAttributes<AttributeNames>> {
  return pipe(
    withLatestFrom()
  );
}
