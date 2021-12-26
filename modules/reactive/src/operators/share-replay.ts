import { shareReplay as rxjsShareReplay } from 'rxjs';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type SchedulerLike } from '../scheduler/scheduler-like';

/**
 * Shares the source and replays a specified number of emissions upon subscription
 * @param config Share replay configuration
 * @returns Observable that replays a number of emitted values upon subscription
 */
export function shareReplay<T>(config: ShareReplayConfig): MonoTypeOperatorFunction<T> {
  return rxjsShareReplay<T>({ ...config });
}

/**
 * Share replay configuration
 */
export interface ShareReplayConfig {
  readonly bufferSize?: number;
  readonly windowTime?: number;
  readonly refCount: boolean;
  readonly scheduler?: SchedulerLike;
}
