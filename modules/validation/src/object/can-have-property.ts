import { identity } from '@komore/functional';
import { mergeMap, of, type Observable, type OperatorFunction } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';
import { type ValidationContext } from '../context/validation-context';

/**
 * Constraint validator that ensures a property is present
 *
 * @param propertyKey Property key
 * @param project Projection used to further assert the property's value
 * @template InputType Input type
 * @template OutputType Output type
 * @template PropertyKey Property key
 */
export function canHaveProperty<
  InputType extends ReadonlyRecord<string, unknown>,
  OutputType,
  PropertyKey extends keyof InputType | string
>(
  _propertyKey: PropertyKey,
  project?: (
    $: Observable<ValidationContext<PropertyKey extends keyof InputType ? InputType[PropertyKey] : unknown>>
  ) => Observable<ValidationContext<OutputType>>
): OperatorFunction<
  ValidationContext<InputType>,
  ValidationContext<InputType & Partial<ReadonlyRecord<PropertyKey, OutputType>>>
> {
  if (project === undefined) {
    return identity as OperatorFunction<
      ValidationContext<InputType>,
      ValidationContext<InputType & Partial<ReadonlyRecord<PropertyKey, OutputType>>>
    >;
  }

  return mergeMap(ctx => {
    // TODO
    //const { value, propertyPath, ...context } = ctx;
    //const propertyValue = value[propertyKey];
    return of(ctx as ValidationContext<InputType & Partial<ReadonlyRecord<PropertyKey, OutputType>>>);
  });
}
