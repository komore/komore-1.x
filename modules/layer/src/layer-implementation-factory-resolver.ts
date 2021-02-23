import type { LayerImplementationFactory } from './layer-implementation-factory';

/**
 * Layer implementation factory resolver
 * @template LayerType Layer type
 * @template LayerOptionsType Layer options type
 */
export interface LayerImplementationFactoryResolver<LayerType, LayerOptionsType> {
  (): Promise<LayerImplementationFactory<LayerType, LayerOptionsType>>;
}
