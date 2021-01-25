import type { Observable } from 'rxjs';
import { from } from 'rxjs';
import { catchError, concatMap, expand, shareReplay, takeWhile } from 'rxjs/operators';
import type { LayerImplementationFactory } from './layer-implementation-factory';

/**
 * Creates a layer observable
 * @param implementationFactories List of implementation factories
 * @returns Observable layer
 */
export function createLayerObservable<LayerType>(
  implementationFactories: ReadonlyArray<LayerImplementationFactory<LayerType>>
): Observable<LayerType> {
    from(implementationFactories).pipe(
        concatMap(factory => factory()),
        takeWhile()
        expand(factory => {
          const result = factory();
          from(factory()).pipe(
            catchError(() => )
          )
        }, ),
        shareReplay()
      );
}
