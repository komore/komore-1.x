import { cloneTemporal } from '@komore/temporal';
import type { TemporalWithTime } from './temporal-with-time';

export function addTime<T extends TemporalWithTime>(temporal: T): T {
  return cloneTemporal(temporal, zdt => zdt.add({}));
}
