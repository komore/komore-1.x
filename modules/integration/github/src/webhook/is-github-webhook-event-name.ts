import type { GithubWebhookEvent } from './github-webhook-event';
import type { GithubWebhookEventName } from './github-webhook-event-name';

export function isGithubWebhookEventName<EventNames extends GithubWebhookEventName[]>(
  ...eventNames: EventNames
): (event: GithubWebhookEvent<GithubWebhookEventName>) => event is GithubWebhookEvent<EventNames[number]> {
  return (event): event is GithubWebhookEvent<EventNames[number]> => eventNames.includes(event.name);
}
