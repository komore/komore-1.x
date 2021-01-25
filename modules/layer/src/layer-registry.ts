import type { Observable } from 'rxjs';

/**
 * Layer registry
 */
export const layerRegistry = new Map<symbol, Observable<unknown>>();
