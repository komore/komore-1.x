import type { Observable } from '@komore/reactive';
import { mapTo } from '@komore/reactive/operators';
import type { FunctionTriggerType } from './function-trigger-type';

type FunctionType<FunctionParameterTypes extends ReadonlyArray<any>, FunctionReturnType> = FunctionParameterTypes extends []
  ? (...functionParameters: FunctionParameterTypes) => Promise<FunctionReturnType> : () => Promise<FunctionReturnType>;
 

function createFunction<
  FunctionName extends string,
  FunctionReturnType,
  FunctionParameterTypes extends ReadonlyArray<any> = []
>(
  functionName: FunctionName,
  project: (functionParameters$: Observable<FunctionParameterTypes>) => Observable<FunctionReturnType>
): (...functionParameters: FunctionParameterTypes) => Promise<FunctionReturnType>;

function createFunction<
  FunctionName extends string,
  FunctionTriggerTypes extends FunctionTriggerType<any>[],
  FunctionReturnType,
  FunctionParameterTypes extends ReadonlyArray<any> = []
>(
  functionName: FunctionName,
  hello: number,
  project: (functionParameters$: Observable<FunctionParameterTypes>) => Observable<FunctionReturnType>
): FunctionType<FunctionParameterTypes, FunctionReturnType>;

/*function f<InBetween extends any[]>([first, inBetween, last]: [first: number, ...[...triggers: InBetween, last: number]]): void {

}
*/
function createFunction(...args: any[]): any {

}



const f1a = createFunction('test-no-trigger', $ => $.pipe(mapTo(42)));
const f1b = createFunction('test-no-trigger-typed', ($: Observable<[value: string]>) => $.pipe(mapTo(42)));
const f2 = createFunction('test-1-trigger', trigger1, $.pipe(mapTo(42)));
const f3 = createFunction('test-2-trigger', trigger1, trigger2, $.pipe(mapTo(42)));
