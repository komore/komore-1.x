import { ListTagsRequest, ListTagsResponse } from '@aws-sdk/client-lambda';
import { Command, ResourceNotFoundException } from '@komore/dev-server-local-amazon/service';
import { map } from 'rxjs/operators';
import { getLambdaFunction } from '../lambda-functions';

type TempListTagsRequest = Omit<ListTagsRequest, 'Resource'> & { ARN: string };

/**
 * Lists tags for a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_TagResource.html TagResource}
 */
export const listTags: Command<TempListTagsRequest, ListTagsResponse> = map(({ ARN }) => {
  const lambdaFunction = getLambdaFunction(ARN);
  if (lambdaFunction === undefined) {
    throw new ResourceNotFoundException(`Lambda function ${ARN}`);
  }

  const Tags = Object.fromEntries(lambdaFunction.tags.entries());

  return {
    Tags
  };
});
