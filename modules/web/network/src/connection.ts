import { defer, fromEvent, map, shareReplay, startWith } from '@komore/reactive';

/**
 * Connection information
 */
export const connection = defer(() => fromEvent(navigator.connection, 'change')).pipe(
  map(() => navigator.connection),
  startWith(navigator.connection),
  shareReplay({ bufferSize: 1, refCount: true })
);

// TODO: remove these once they are available in the shipped typings
declare global {
  type Megabit = number;
  type Millisecond = number;
  type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';
  type ConnectionType = 'bluetooth' | 'cellular' | 'ethernet' | 'mixed' | 'none' | 'other' | 'unknown' | 'wifi';

  interface NetworkInformation extends EventTarget {
    readonly downlinkMax?: Megabit;
    readonly downlink?: Megabit;
    readonly effectiveType?: EffectiveConnectionType;
    onchange?: EventListener;
    readonly rtt?: Millisecond;
    readonly saveData?: boolean;
    readonly type: ConnectionType;
  }

  interface Navigator {
    readonly connection: NetworkInformation;
  }
}
