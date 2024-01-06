/**
 * Omits an indexed access from a type
 *
 * @template T Type
 */
export type OmitIndexedAccess<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};
