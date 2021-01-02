import { defer, fromEvent } from 'rxjs';
// TODO: remove cast once FromEventTarget signature is fixed; https://github.com/ReactiveX/rxjs/issues/5944
import { FromEventTarget } from 'rxjs/dist/types/internal/observable/fromEvent';
import { map, shareReplay } from 'rxjs/operators';

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

  interface Navigator extends NavigatorNetworkInformation {}
  interface WorkerNavigator extends NavigatorNetworkInformation {}
}

// TODO: remove cast once FromEventTarget signature is fixed; https://github.com/ReactiveX/rxjs/issues/5944
export const CONNECTION = defer(() => fromEvent(navigator.connection as FromEventTarget<Event>, 'change')).pipe(
  map(() => navigator.connection),
  shareReplay({ bufferSize: 1, refCount: true })
);
