import { type Observable as RxjsObservable, type Subscription as RxjsSubscription } from 'rxjs';

declare global {
  type Observable<T> = RxjsObservable<T>;
  var Observable = RxjsObservable;
  type Subscription = RxjsSubscription;
  var Subscription = RxjsSubscription;
}
