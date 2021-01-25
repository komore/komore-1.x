import type { ContentModeratorClient } from '@azure/cognitiveservices-contentmoderator';
import { withAzureClient } from '@komore/integration-azure';
import { createContentModeratorClient } from '../create-content-moderator-client';

/**
 * Adds a Content Moderator client to a message
 * @param contentModeratorClient Content Moderator client
 * @returns Operator function that turns a message into a message with a Content Moderator client
 */
export const withContentModeratorClient = (contentModeratorClient?: ContentModeratorClient) =>
  withAzureClient('cognitiveservices-contentmoderator', contentModeratorClient ?? createContentModeratorClient());
