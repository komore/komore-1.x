import { fromEvent, mapTo, merge, type Observable } from '@komore/reactive';
import { HostState } from '@komore/runtime/host';

export function createNodeHostStateObservable(): Observable<HostState> {
  return merge([
    fromEvent(process, 'beforeExit').pipe(mapTo('stopping' as const)),
    fromEvent(process, 'exit').pipe(mapTo('stopped' as const)),
  ]);
}
