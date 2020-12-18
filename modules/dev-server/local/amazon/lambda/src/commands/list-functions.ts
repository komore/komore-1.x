import { ListFunctionsRequest, ListFunctionsResponse } from '@aws-sdk/client-lambda';
import { Command, filterUnsupportedProperties } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { lambdaFunctions } from '../lambda-functions';

/**
 * Lists available Lambda functions
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html ListFunctions}
 */
export const listFunctions: Command<ListFunctionsRequest, ListFunctionsResponse> = pipe(
  filterUnsupportedProperties('FunctionVersion', 'MasterRegion'),
  map(({ Marker, MaxItems }) => {
    const lambdaFunctionConfigurations = Array.from(lambdaFunctions.values());
    const start = Marker !== undefined ? parseInt(Marker, 10) : 0;

    lambdaFunctionConfigurations.sort(
      ({ configuration: { FunctionName: lhs } }, { configuration: { FunctionName: rhs } }) => lhs.localeCompare(rhs)
    );

    const Functions = lambdaFunctionConfigurations.slice(start, MaxItems);
    const NextMarker = MaxItems !== undefined ? `${lambdaFunctionConfigurations.length - MaxItems + start}` : undefined;

    return {
      Functions,
      NextMarker
    };
  })
);
