import { type GenericFunction } from './generic-function';

/**
 * Picks a call signature from a type
 *
 * @template T Type
 */
export type PickCallSignature<T extends GenericFunction> = (...parameters: Parameters<T>) => ReturnType<T>;
