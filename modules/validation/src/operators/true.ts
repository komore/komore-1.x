import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is true
 */
export const _true = constraint((value): value is true => value === true, 'boolean.true');
