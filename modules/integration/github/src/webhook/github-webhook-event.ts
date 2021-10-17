import type { EmitterWebhookEvent } from '@octokit/webhooks';
import type { GithubWebhookEventName } from './github-webhook-event-name';

/**
 * Github webhook event
 * @template EventName Event name
 */
export type GithubWebhookEvent<EventName extends GithubWebhookEventName = GithubWebhookEventName> =
  EmitterWebhookEvent<EventName>;
