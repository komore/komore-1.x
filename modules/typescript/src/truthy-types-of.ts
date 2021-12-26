import { type Falsy } from './falsy';

/**
 * Truthy types of a type
 * @template T Type
 */
export type TruthyTypesOf<T> = T extends Falsy ? never : T;
