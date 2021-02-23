import type { Observable } from 'rxjs';
import { defer } from 'rxjs';
import type { LayerImplementationFactory } from './layer-implementation-factory';
import type { LayerImplementationFactoryResolver } from './layer-implementation-factory-resolver';

/**
 * Uses a specific layer implementation
 * @param producer Function that produces a layer implementation factory promise
 * @returns Observable layer implementation factory
 */
export function useImplementation<LayerType, LayerOptionsType>(
  producer: LayerImplementationFactoryResolver<LayerType, LayerOptionsType>
): Observable<LayerImplementationFactory<LayerType, LayerOptionsType>> {
  return defer(() => producer());
}
