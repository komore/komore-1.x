import { UntagResourceRequest, UntagResourceResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Removes one or more tags from a resource
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UntagResource.html UntagResource}
 */
export const untagResource: Command<UntagResourceRequest, UntagResourceResponse> = throwUnimplementedCommand(
  'UntagResource'
);
