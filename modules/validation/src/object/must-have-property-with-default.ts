import { map, mergeMap, of, type Observable, type OperatorFunction } from '@komore/reactive';
import { type Expand, type ReadonlyRecord } from '@komore/typescript';

import { type ValidationContext } from '../context/validation-context';

/**
 * Constraint validator that ensures a property is present, providing a default value when the property is missing
 *
 * @param propertyKey Property key
 * @param defaultValue Default value
 * @param project Projection used to further assert the property's value
 * @template InputType Input type
 * @template DefaultType Default type
 * @template PropertyKey Property key
 * @template OutputType Output type
 */
export function mustHavePropertyWithDefault<
  InputType,
  DefaultType,
  PropertyKey extends keyof InputType | string,
  OutputType = PropertyKey extends keyof InputType ? NonNullable<InputType[PropertyKey]> : unknown
>(
  propertyKey: PropertyKey,
  defaultValue: DefaultType,
  project?: (
    $: Observable<
      ValidationContext<
        PropertyKey extends keyof InputType ? NonNullable<InputType[PropertyKey] | DefaultType> : DefaultType
      >
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
      const { value } = ctx;
      const context =
        typeof value === 'object' && value !== null && propertyKey in value
          ? ctx
          : {
              ...ctx,
              value: {
                ...ctx.value,
                [propertyKey]: defaultValue,
              },
            };
      return context as ValidationContext<Expand<InputType & ReadonlyRecord<PropertyKey, OutputType>>>;
    });
  }
}
