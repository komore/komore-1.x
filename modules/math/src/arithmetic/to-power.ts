export function toPower(exponent: number): (value: number) => number;
export function toPower(exponent: bigint): (value: bigint) => bigint;

export function toPower(exponent: number | bigint): ((value: number) => number) | ((value: bigint) => bigint) {
  return (value: number) => value ** (exponent as number);
}
