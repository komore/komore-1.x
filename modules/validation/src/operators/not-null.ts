import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is not null
 */
export const notNull = constraint((value): value is null => value !== null, 'null.not');
