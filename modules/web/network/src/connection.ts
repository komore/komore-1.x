import { defer, fromEvent } from '@komore/reactive';
import { map, shareReplay, startWith } from '@komore/reactive/operators';

// TODO: remove these once they are available in the shipped typings
declare global {
  type Megabit = number;
  type Millisecond = number;
  type ConnectionType =
    | 'bluetooth'
    | 'cellular'
    | 'ethernet'
    | 'mixed'
    | 'none'
    | 'other'
    | 'unknown'
    | 'wifi'
    | 'wimax';
  type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';

  interface NetworkInformation extends EventTarget {
    readonly type?: ConnectionType;
    readonly effectiveType?: EffectiveConnectionType;
    readonly downlinkMax?: Megabit;
    readonly downlink?: Megabit;
    readonly rtt?: Millisecond;
    readonly saveData?: boolean;
    onchange?: EventListener;
  }

  interface NavigatorNetworkInformation {
    readonly connection: NetworkInformation;
  }

  interface Navigator extends NavigatorNetworkInformation {} // eslint-disable-line @typescript-eslint/no-empty-interface
  interface WorkerNavigator extends NavigatorNetworkInformation {} // eslint-disable-line @typescript-eslint/no-empty-interface
}

/**
 * Connection status
 */
export const CONNECTION = defer(() => fromEvent(navigator.connection, 'change')).pipe(
  map(() => navigator.connection),
  startWith(navigator.connection),
  shareReplay({ bufferSize: 1, refCount: true })
);
