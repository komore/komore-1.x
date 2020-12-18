import { Function } from '@komore/function';
import { FunctionInputParametersType } from 'modules/function/src/function-input';
import { FunctionInputType } from 'modules/function/src/function-type';

export function callFunction<
  F extends Function<any>
>(f: F, parameters: FunctionInputParametersType<FunctionInputType<F): ReturnType<F> {
  return f();
}

callFunction(async function(): Promise<void> {});

const x: Function<any> = () => {}

x();
