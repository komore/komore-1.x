import { map, mergeMap, of, type Observable, type OperatorFunction } from '@komore/reactive';
import { type Expand, type ReadonlyRecord } from '@komore/typescript';
import { type ValidationContext } from '../context/validation-context';
import { ConstraintViolationError } from '../error/constraint-violation-error';

/**
 * Constraint validator that ensures a property is present
 *
 * @param propertyKey Property key
 * @param project Projection used to further assert the property's value
 * @template InputType Input type
 * @template PropertyKey Property key
 * @template OutputType Output type
 */
export function mustHaveProperty<
  InputType,
  PropertyKey extends keyof InputType | string,
  OutputType = PropertyKey extends keyof InputType ? NonNullable<InputType[PropertyKey]> : unknown
>(
  propertyKey: PropertyKey,
  project?: (
    $: Observable<
      ValidationContext<PropertyKey extends keyof InputType ? NonNullable<InputType[PropertyKey]> : unknown>
    >
  ) => Observable<ValidationContext<OutputType>>
): OperatorFunction<
  ValidationContext<InputType>,
  ValidationContext<Expand<InputType & ReadonlyRecord<PropertyKey, OutputType>>>
> {
  if (project !== undefined) {
    return mergeMap(ctx => {
      //const { value, propertyPath, ...context } = ctx;
      return of(ctx as ValidationContext<Expand<InputType & ReadonlyRecord<PropertyKey, OutputType>>>);
    });
  } else {
    return map(ctx => {
      if (!(propertyKey in ctx.value)) {
        throw new ConstraintViolationError('property.missing', { propertyKey, propertyPath: ctx.propertyPath });
      }

      return ctx as ValidationContext<Expand<InputType & ReadonlyRecord<PropertyKey, OutputType>>>;
    });
  }
}
