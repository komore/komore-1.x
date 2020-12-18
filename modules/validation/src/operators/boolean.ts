import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a boolean
 */
export const boolean = constraint((value): value is boolean => typeof value === 'boolean', 'boolean');
