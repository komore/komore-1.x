import { type GenericFunction } from './generic-function';

/**
 * Omits a call signature from a type
 *
 * @template T Type
 */
export type OmitCallSignature<T> = {
  readonly [K in keyof T]: K extends GenericFunction ? never : T[K];
};
