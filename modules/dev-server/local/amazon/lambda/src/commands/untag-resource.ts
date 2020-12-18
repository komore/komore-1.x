import { UntagResourceRequest } from '@aws-sdk/client-lambda';
import { Command, ResourceNotFoundException, throwIfMissingProperties } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLambdaFunction } from '../lambda-functions';

type TempUntagResourceRequest = Omit<UntagResourceRequest, 'Resource'> & { ARN: string };

/**
 * Removes tags from a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html UntagResource}
 */
export const untagResource: Command<TempUntagResourceRequest, void> = pipe(
  throwIfMissingProperties('TagKeys'),
  map(({ ARN, TagKeys }) => {
    const lambdaFunction = getLambdaFunction(ARN);
    if (lambdaFunction === undefined) {
      throw new ResourceNotFoundException(`Lambda function ${ARN}`);
    }

    for (const tagKey of TagKeys) {
      lambdaFunction.tags.delete(tagKey);
    }
  })
)
