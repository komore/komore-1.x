import { pipe } from '@komore/functional';
import { map, pairwise, startWith, type OperatorFunction } from '@komore/reactive';
import { currentMillisecondsSinceEpoch } from '@komore/temporal/compatibility';

/**
 * Creates an operator function that emits the timestamp of the previous emission
 */
export function mapToPreviousDiscordTimestamp<T>(): OperatorFunction<T, number | null> {
  return pipe(
    map(() => currentMillisecondsSinceEpoch()),
    startWith(null),
    pairwise(),
    map(([previous]) => previous)
  );
}
