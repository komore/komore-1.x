import { type ComputationInput, type ComputationResult } from './types';

export function computeFactorial(input: ComputationInput): ComputationResult {
  let value = 1;
  for (let i = Math.abs(input); i > 1; --i) {
    value = value * i;
  }
  const factorial = input < 0 ? -value : value;
  return [input, factorial];
}
