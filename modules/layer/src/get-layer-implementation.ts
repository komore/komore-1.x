import type { Observable } from 'rxjs';
import { defer, throwError } from 'rxjs';
import type { LayerImplementation } from './layer-implementation';
import { layerImplementationRegistry } from './layer-implementation-registry';

/**
 * Gets a layer implementation, throwing an error if the implementation is not available
 * @param implementationType Implementation type
 * @returns Implementation
 * @template ImplementationType Implementation type
 */
export function getLayerImplementation<ImplementationType>(implementationType: symbol): Observable<ImplementationType> {
  return defer(() => {
    const layerImplementation = layerImplementationRegistry.get(implementationType);
    if (layerImplementation === undefined) {
      return throwError(() => new Error(`layer implementation for ${implementationType.description} not found`));
    }

    const typedLayerImplementation = (layerImplementationRegistry as any) as LayerImplementation<ImplementationType>;

    return typedLayerImplementation.observable;
  });
}
