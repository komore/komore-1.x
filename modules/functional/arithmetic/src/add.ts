/**
 * TODO
 * @param addend
 * @returns
 */
export function add(addend: number): (value: number) => number;
export function add(addend: bigint): (value: bigint) => bigint;

export function add(addend: number | bigint): ((value: number) => number) | ((value: bigint) => bigint) {
  return (value: number) => value + (addend as number);
}
