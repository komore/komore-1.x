import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is null
 * @note This operator is used as a replacement for null values when using validate or field
 */
export const _null = constraint((value): value is null => value === null, 'null');
