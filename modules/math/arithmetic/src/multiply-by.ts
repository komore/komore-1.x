/**
 * TODO
 * @param multiplier 
 * @returns 
 */
 export function multiplyBy<T extends number | bigint>(multiplier: T): (multiplicant: T) => T {
    return multiplicant => multiplier * multiplicant as T;
  }
  