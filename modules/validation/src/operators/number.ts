import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a number
 */
export const number = constraint((value): value is number => typeof value === 'number', 'numeric');
