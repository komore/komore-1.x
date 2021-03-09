import type { DeleteFunctionRequest } from '@aws-sdk/client-lambda';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { filterUnsupportedProperties } from '@komore/dev-server-local-amazon/service';
import { pipe } from '@komore/reactive';
import { dropValues, tapValue } from '@komore/reactive/operators';
import { lambdaFunctions } from '../lambda-functions';

type TempDeleteFunctionRequest = DeleteFunctionRequest & { FunctionName: string };

/**
 * Deletes a function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html DeleteFunction}
 */
export const deleteFunction: Command<TempDeleteFunctionRequest, void> = pipe(
  filterUnsupportedProperties('Qualifier'),
  tapValue(({ FunctionName }) => lambdaFunctions.delete(FunctionName)),
  dropValues()
);
