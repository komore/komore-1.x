import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { tapNext } from './tap-next';

/**
 * Performs side-effects when the source observable is subscribed to
 *
 * @param subscriptionObserver Subscription observer
 * @template T Value type
 */
export function tapSubscription<T>(subscriptionObserver: () => void): MonoTypeOperatorFunction<T> {
  // TODO: implement properly
  return tapNext(subscriptionObserver);
}
