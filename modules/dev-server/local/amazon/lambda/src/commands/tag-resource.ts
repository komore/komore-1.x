import { TagResourceRequest } from '@aws-sdk/client-lambda';
import { Command, ResourceNotFoundException, throwIfMissingProperties } from '@komore/dev-server-local-amazon/service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
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

    for (const [tagKey, tagValue] of Object.entries(Tags)) {
      lambdaFunction.tags.set(tagKey, tagValue);
    }
  })
)
