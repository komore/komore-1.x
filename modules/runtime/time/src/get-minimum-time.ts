import type { Time } from './time';

export function getMinimumTime(): Time {
  const d = new Date('2000-01-01T00:00:00.000Z');
  return {
    _: d,
    _t: d
  };
}
