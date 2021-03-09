import type { InvocationRequest, InvocationResponse } from '@aws-sdk/client-lambda';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { filterUnsupportedProperties } from '@komore/dev-server-local-amazon/service';
import { of, pipe } from '@komore/reactive';
import { mergeMap, withLatestFrom } from '@komore/reactive/operators';
import { lambdaFunctions } from '../lambda-functions';

type TempInvocationRequest = InvocationRequest & { FunctionName: string };

/**
 * Invokes a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html Invoke}
 */
export const invoke: Command<TempInvocationRequest, InvocationResponse> = pipe(
  filterUnsupportedProperties(),
  withLatestFrom()
  mergeMap(({ FunctionName, InvocationType, LogType }) => {
    console.log(`function ${FunctionName} invoke ${InvocationType} with logs ${LogType}`);

    const lambdaFunction = lambdaFunctions.get(FunctionName);
    if (lambdaFunction === undefined) {
      throw new Error(`Lambda function ${FunctionName} not found`);
    }

    if (lambdaFunction.script) {
      console.log('');
    }

    const invocationResponse: InvocationResponse = {
      // TODO
    };

    return of(invocationResponse);
  })
);
