import { type Function, type FunctionInputParametersType, type FunctionInputType } from '@komore/function';

export function callFunction<
  F extends Function<any>
>(f: F, parameters: FunctionInputParametersType<FunctionInputType<F): ReturnType<F> {
  return f();
}

callFunction(async function(): Promise<void> {});

const x: Function<any> = () => {}

x();
