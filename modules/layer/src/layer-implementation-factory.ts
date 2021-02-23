import type { Observable } from 'rxjs';

/**
 * Layer implementation factory
 * @template LayerType Layer type
 * @template LayerOptionsType Layer options type
 */
export interface LayerImplementationFactory<LayerType, LayerOptionsType> {
  (options: LayerOptionsType): Observable<LayerType> | Promise<LayerType>;
}
