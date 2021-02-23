import type { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export function callLayerFunction<
  ParameterTypes extends ReadonlyArray<unknown>,
  ResultType,
  FunctionName extends keyof LayerType,
  FunctionType extends (...parameters: ParameterTypes) => Observable<ResultType>,
  LayerType extends { [K in FunctionName]: FunctionType }
>(layer$: Observable<LayerType>, functionName: FunctionName, ...parameters: ParameterTypes): Observable<ResultType> {
  return layer$.pipe(mergeMap(layer => layer[functionName](...parameters)));
}
