import { createLayerObservable } from './create-layer-observable';
import type { LayerImplementationFactory } from './layer-implementation-factory';
import { layerRegistry } from './layer-registry';

/**
 * Registers a layer implementation
 * @param layerType Layer type
 * @param implementationFactories List of factories
 * @template LayerType Layer type
 */
export function registerLayer<LayerType>(
  layerType: symbol,
  ...implementationFactories: ReadonlyArray<LayerImplementationFactory<LayerType>>
): void {
  if (layerRegistry.has(layerType)) {
    throw new Error(`layer ${layerType.description} has already been registered`);
  }

  const layer$ = createLayerObservable(implementationFactories);
  layerRegistry.set(layerType, layer$);
}
