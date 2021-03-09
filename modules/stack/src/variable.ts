import type { OperatorFunction } from '@komore/reactive';
import type { Stack } from './stack';
import type { Value, RawValueType } from './value';

/**
 * Variable reference
 */
interface VariableReference extends Value {
  readonly variableName;
}

/**
 * Variable reference implementation
 */
class VariableReferenceImpl implements VariableReference {
  constructor(readonly variableName: string) {}
}

/**
 * Tests whether a value is a variable reference
 * @param value Value
 * @returns true if the value is a variable reference
 */
export function isVariableReference(value: ValueType): value is VariableReference {
  return value instanceof VariableReferenceImpl;
}

/**
 * Creates a variable reference
 * @param variableName Variable name
 */
export function variable(variableName: string): VariableReference;
export function variable(variableName: string, variableDescription: string, defaultValue?: RawValueType): OperatorFunction<Stack, Stack>;
export function variable(variableName: string, variableDescription?: string, defaultValue?: RawValueType): VariableReference {
  return new VariableReferenceImpl(variableName);
}
