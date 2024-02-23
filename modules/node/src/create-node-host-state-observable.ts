import { fromEvent, mapTo, merge, startWith } from '@komore/reactive';
import { HostState } from '@komore/runtime/host';

export function createNodeHostStateObservable(): Observable<HostState> {
  return merge([
    fromEvent(process, 'beforeExit').pipe(mapTo('stopping' as const)),
    fromEvent(process, 'exit').pipe(mapTo('stopped' as const)),
  ]).pipe(startWith('running' as const), startWith('starting' as const));
}
