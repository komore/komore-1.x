import type { Observable } from '@komore/reactive';
import { concat, from, of } from '@komore/reactive';
import { catchError, filterDefined, first, throwIfEmpty } from '@komore/reactive/operators';
import type { LayerImplementationFactory } from './layer-implementation-factory';
import type { LayerImplementationFactoryResolver } from './layer-implementation-factory-resolver';

/**
 * Uses the first available layer implementation
 * @param factoryResolvers Factory resolvers
 * @returns Observable layer implementation factory
 * @template LayerType Layer type
 * @template LayerOptionsType Layer options type
 */
export function useAvailableImplementation<LayerType, LayerOptionsType>(
  factoryResolvers: ReadonlyArray<LayerImplementationFactoryResolver<LayerType, LayerOptionsType>>
): Observable<LayerImplementationFactory<LayerType, LayerOptionsType>> {
  const factoryResolverPromises = factoryResolvers.map(resolver => from(resolver()));
  return concat(factoryResolverPromises).pipe(
    catchError(() => of(undefined)),
    filterDefined(),
    first(),
    throwIfEmpty(() => new Error(`no available layer implementation found`))
  );
}
