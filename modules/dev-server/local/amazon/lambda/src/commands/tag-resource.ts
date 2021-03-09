import type { TagResourceRequest } from '@aws-sdk/client-lambda';
import type { Command } from '@komore/dev-server-local-amazon/service';
import { ResourceNotFoundException, throwIfMissingProperties } from '@komore/dev-server-local-amazon/service';
import { pipe } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import { getLambdaFunction } from '../lambda-functions';

type TempTagResourceRequest = Omit<TagResourceRequest, 'Resource'> & { ARN: string };

/**
 * Adds tags to a Lambda function
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/API_TagResource.html TagResource}
 */
export const tagResource: Command<TempTagResourceRequest, void> = pipe(
  throwIfMissingProperties('Tags'),
  map(({ ARN, Tags }) => {
    const lambdaFunction = getLambdaFunction(ARN);
    if (lambdaFunction === undefined) {
      throw new ResourceNotFoundException(`Lambda function ${ARN}`);
    }

    // TODO: call common tag service

    for (const [tagKey, tagValue] of Object.entries(Tags)) {
      lambdaFunction.tags.set(tagKey, tagValue);
    }
  })
)
