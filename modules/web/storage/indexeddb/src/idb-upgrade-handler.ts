import { Observable } from 'rxjs';
import { IDBUpgrade } from './idb-upgrade';

/**
 * IndexedDB upgrade handler
 * @param idbUpgrade$ IndexedDB upgrade observable
 * @returns Observable that emits when the upgrade is done
 */
export type IDBUpgradeHandler = (idbUpgrade$: Observable<IDBUpgrade>) => Observable<void>;
