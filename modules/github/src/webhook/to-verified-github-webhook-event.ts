import { verify } from '@octokit/webhooks-methods';

import { jsonToObject } from '@komore/json';
import { deferPromise, map, mapTo, throwIf } from '@komore/reactive';

import { type GithubWebhookEvent } from './github-webhook-event';
import { type GithubWebhookEventName } from './github-webhook-event-name';
import { type GithubWebhookEventRequest } from './github-webhook-event-request';
import { InvalidGithubWebhookSignatureError } from './invalid-github-webhook-signature-error';

export function toVerifiedGithubWebhookEvent(
  githubSecret: string
): (webhookEventRequest: GithubWebhookEventRequest) => Observable<GithubWebhookEvent<GithubWebhookEventName>> {
  return ({ event, payload, signature }) =>
    deferPromise(() => verify(githubSecret, payload, signature)).pipe(
      throwIf(
        result => result === false,
        () => new InvalidGithubWebhookSignatureError('GitHub webhook payload did not match the signature')
      ),
      mapTo(eventPayload),
      map(jsonToObject<GithubWebhookEvent<GithubWebhookEventName>>())
    );
}
