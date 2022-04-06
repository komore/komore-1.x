/**
 * TODO
 * @param addend
 * @returns
 */
export function toValuePlus(addend: number): (value: number) => number;
export function toValuePlus(addend: bigint): (value: bigint) => bigint;
// map(numberAdding(x))?
export function toValuePlus(addend: number | bigint): ((value: number) => number) | ((value: bigint) => bigint) {
  if (typeof addend === 'number') {
    return (value: number) => value + addend;
  } else {
    return (value: bigint) => value + addend;
  }
}
