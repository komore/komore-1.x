import { type Observable } from '@komore/reactive';
import { type IndexedDBUpgrade } from './indexeddb-upgrade';

/**
 * IndexedDB upgrade handler
 * @param idbUpgrade$ IndexedDB upgrade observable
 * @returns Observable that emits when the upgrade is done
 */
export interface IndexedDBUpgradeHandler {
  (idbUpgrade$: Observable<IndexedDBUpgrade>): Observable<void>;
}
