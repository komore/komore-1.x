import type { Observable, Subject, Subscription } from '@komore/reactive';
import { concatMap } from '@komore/reactive/operators';
import type { LayerImplementationFactory } from './layer-implementation-factory';

/**
 * Selects a layer implementation
 * @param layerOptions Layer options
 * @param layerImplementationFactorySelector Layer implementation factory selector
 * @param layerSubject Layer subject
 * @returns Subscription
 */
export function selectImplementation<LayerType, LayerOptionsType>(
  layerOptions: LayerOptionsType,
  layerImplementationFactorySelector: () => Observable<LayerImplementationFactory<LayerType, LayerOptionsType>>,
  layerSubject: Subject<LayerType>
): Subscription {
  return layerImplementationFactorySelector()
    .pipe(concatMap(implementationFactory => implementationFactory(layerOptions)))
    .subscribe(layerSubject);
}
