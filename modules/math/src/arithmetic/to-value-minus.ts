/**
 * TODO
 * @param addend
 * @returns
 */
export function toValueMinus(addend: number): (value: number) => number;
export function toValueMinus(addend: bigint): (value: bigint) => bigint;

export function toValueMinus(addend: number | bigint): ((value: number) => number) | ((value: bigint) => bigint) {
  return (value: number) => value - (addend as number);
}
