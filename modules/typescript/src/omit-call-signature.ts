import { GenericFunction } from './generic-function';

/**
 * Omits a call signature from a type
 *
 * @template T Type
 */
export type OmitCallSignature<T> = {
  [K in keyof T]: K extends GenericFunction ? never : T[K];
};
