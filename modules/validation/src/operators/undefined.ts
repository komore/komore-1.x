import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is undefined
 */
export const _undefined = constraint((value): value is undefined => value === undefined, 'undefined');
