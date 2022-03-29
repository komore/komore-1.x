import { enumToValues } from '@komore/functional';
import { Month } from './month';

/**
 * List of months
 */
export const MONTHS: ReadonlyArray<Month> = enumToValues(Month);
