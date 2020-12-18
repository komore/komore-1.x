import { Observable } from 'rxjs';

export type Store<S> = Observable<S>;

export function createStore<S>(initialValue: S): Observable<S> {

}
