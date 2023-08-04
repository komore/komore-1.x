import { friday } from './friday';
import { monday } from './monday';
import { saturday } from './saturday';
import { sunday } from './sunday';
import { thursday } from './thursday';
import { tuesday } from './tuesday';
import { wednesday } from './wednesday';

/**
 * List of week days
 */
export const weekDays = [monday, tuesday, wednesday, thursday, friday, saturday, sunday] as const;
