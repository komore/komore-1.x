import type { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

/**
 * Creates a layer subject and its observable
 * @returns Subject and observable for the layer
 */
export function createLayer<LayerType>(): [subject: Subject<LayerType>, observable: Observable<LayerType>] {
  const subject = new Subject<LayerType>();
  const observable = subject.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: false }));
  return [subject, observable];
}
