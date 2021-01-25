import type { Observable } from 'rxjs';

/**
 * Layer implementation factory
 * @template LayerType Layer type
 */
export interface LayerImplementationFactory<LayerType> {
  (): Observable<LayerType> | Promise<LayerType>;
}
