import type { Observable } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

export function callSynchronousLayerFunction<
  ParameterTypes extends ReadonlyArray<unknown>,
  ResultType,
  FunctionName extends keyof LayerType,
  FunctionType extends (...parameters: ParameterTypes) => ResultType,
  LayerType extends { [K in FunctionName]: FunctionType }
>(layer$: Observable<LayerType>, functionName: FunctionName, ...parameters: ParameterTypes): Observable<ResultType> {
  return layer$.pipe(map(layer => layer[functionName](...parameters)));
}
