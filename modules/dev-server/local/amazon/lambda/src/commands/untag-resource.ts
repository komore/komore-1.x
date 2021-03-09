import type { UntagResourceRequest } from '@aws-sdk/client-lambda';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { ResourceNotFoundException, throwIfMissingProperties } from '@komore/dev-server-local-amazon/service';
import { pipe } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import { getLambdaFunction } from '../lambda-functions';

type TempUntagResourceRequest = Omit<UntagResourceRequest, 'Resource'> & { ARN: string };

/**
 * Removes tags from a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html UntagResource}
 */
export const untagResource: Command<TempUntagResourceRequest, void> = pipe(
  throwIfMissingProperties('TagKeys'),
  map(({ ARN, TagKeys }) => {
    // TODO: call common devserver tag service
    const lambdaFunction = getLambdaFunction(ARN);
    if (lambdaFunction === undefined) {
      throw new ResourceNotFoundException(`Lambda function ${ARN}`);
    }

    for (const tagKey of TagKeys) {
      lambdaFunction.tags.delete(tagKey);
    }
  })
)
