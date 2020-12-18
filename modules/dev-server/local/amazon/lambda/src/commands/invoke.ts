import { InvocationRequest, InvocationResponse } from '@aws-sdk/client-lambda';
import { Command, filterUnsupportedProperties } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { lambdaFunctions } from '../lambda-functions';

type TempInvocationRequest = InvocationRequest & { FunctionName: string };

/**
 * Invokes a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html Invoke}
 */
export const invoke: Command<TempInvocationRequest, InvocationResponse> = pipe(
  filterUnsupportedProperties(),
  mergeMap(({ FunctionName, InvocationType, LogType }) => {
    const lambdaFunction = lambdaFunctions.get(FunctionName);
    if (lambdaFunction === undefined) {
      throw new Error(`Lambda function ${FunctionName} not found`);
    }

    if (lambdaFunction.script) {
      
    }
  })
);
