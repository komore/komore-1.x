import { enumValues } from '@komore/functional';
import { WeekDay } from './week-day';

/**
 * List of week days
 */
export const WEEK_DAYS: ReadonlyArray<WeekDay> = enumValues(WeekDay);
