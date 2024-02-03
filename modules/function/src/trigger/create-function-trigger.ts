import { type FunctionTrigger } from './function-trigger';

export function createFunctionTrigger<InputType, OutputType>(
  handle: (input$: Observable<InputType>) => Observable<OutputType>,
  test: (input: InputType) => Observable<boolean>
): FunctionTrigger<InputType, OutputType> {
  return {
    handle,
    test,
  };
}
