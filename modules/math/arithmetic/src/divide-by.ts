export function divideBy(divisor: number): (dividend: number) => number;
export function divideBy(divisor: bigint): (dividend: bigint) => bigint;

/**
 * TODO
 * @param divisor 
 * @returns 
 */
export function divideBy(divisor: number | bigint): (dividend: (typeof divisor) extends bigint ? bigint : number) =>  typeof divisor extends number ? number : bigint {
  return dividend => dividend / divisor as T;
}

let x = divideBy(1n);
x = x;