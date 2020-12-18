import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a string
 */
export const string = constraint((value): value is string => typeof value === 'string', 'string');
