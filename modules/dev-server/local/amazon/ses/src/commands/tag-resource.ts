import { TagResourceRequest, TagResourceResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Adds one or more tags to a resource
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TagResource.html TagResource}
 */
export const tagResource: Command<TagResourceRequest, TagResourceResponse> = throwUnimplementedCommand('TagResource');
