import { createDefaultNowProvider } from '../temporal/create-default-now-provider';
import { type ValidationContext } from './validation-context';

/**
 * Creates a validation context
 *
 * @param value Value
 * @param providers Validation providers
 * @returns Validation context
 */
export function createValidationContext<ValueType>(
  value: ValueType,
  providers?: Partial<ValidationContext<ValueType>['providers']>
): ValidationContext<ValueType> {
  return {
    constraintViolations: [],
    propertyPath: '',
    providers: {
      now: providers?.now ?? createDefaultNowProvider(),
    },
    value,
  };
}
