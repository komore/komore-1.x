import type { Temporal } from '../temporal';
import type { Interval } from './interval';

export function parseISO8601Interval<T extends Temporal>(iso8601: string): Interval<T>;
