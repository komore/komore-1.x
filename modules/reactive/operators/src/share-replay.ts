import type { MonoTypeOperatorFunction } from '@komore/reactive';
import type { SchedulerLike } from 'rxjs'; // TODO: type in @komore/reactive
import { shareReplay as rxjsShareReplay } from 'rxjs/operators';

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
