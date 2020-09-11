import { Observable, of } from 'rxjs';
import { OperatorFunction } from 'rxjs/internal/types';
import { pipeFromArray } from 'rxjs/internal/util/pipe';
import { RawValueType, ValueType } from './value';

/**
 * Stack
 */
export interface Stack {
  /**
   * Registers a variable
   * @param name Variable name
   * @param description Variable description
   * @param defaultValue Optional default value
   * @returns this
   */
  registerVariable(name: string, description: string, defaultValue?: RawValueType): this;
}

/**
 * Stack implementation
 */
class StackImpl implements Stack {
  private readonly variables = new Map<string, Readonly<{
    name: string;
    description: string;
    defaultValue?: ValueType;
  }>>();

  /**
   * Registers a variable
   * @param name Variable name
   * @param description Variable description
   * @param defaultValue Optional default value
   * @returns this
   */
  registerVariable(name: string, description: string, defaultValue?: RawValueType): this {
    return this;
  }
}

/**
 * Create a stack
 * @param operatorFunctions 
 * @returns Observable stack
 */
export function stack(...operatorFunctions: OperatorFunction<Stack, any>[]): Observable<Stack> {
  const s = of(new StackImpl());
  return pipeFromArray(operatorFunctions)(s);
}
