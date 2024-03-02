import { type RandomNumberBetweenOptions } from './random-number-between-options';

/**
 * Creates a function that returns a random number between a minimum and maximum (excluded) value
 *
 * @param range Range
 * @returns Function that returns a random number between a minimum and maximum (excluded) value
 */
export function randomNumberBetween(options: RandomNumberBetweenOptions): () => number {
  const { minimum, maximum, integer = false, rng = Math.random } = options;
  const difference = maximum - minimum;

  return () => {
    const randomValue = rng();
    const value = minimum + randomValue * difference;
    return integer ? Math.floor(value) : value;
  };
}
