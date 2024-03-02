import { type hashAlgorithms } from './hash-algorithms';

/**
 * Hash algorithm
 */
export type HashAlgorithm = (typeof hashAlgorithms)[number];
