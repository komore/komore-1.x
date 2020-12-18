import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is present
 */
export const required = constraint(<T>(value: T): value is NonNullable<T> => value !== undefined, 'required');
