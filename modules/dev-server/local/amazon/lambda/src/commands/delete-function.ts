import { DeleteFunctionRequest } from '@aws-sdk/client-lambda';
import { Command, filterUnsupportedProperties } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { lambdaFunctions } from '../lambda-functions';

type TempDeleteFunctionRequest = DeleteFunctionRequest & { FunctionName: string };

/**
 * Deletes a function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html DeleteFunction}
 */
export const deleteFunction: Command<TempDeleteFunctionRequest, void> = pipe(
  filterUnsupportedProperties('Qualifier'),
  tap(({ FunctionName }) => lambdaFunctions.delete(FunctionName)),
  map(() => {})
);
