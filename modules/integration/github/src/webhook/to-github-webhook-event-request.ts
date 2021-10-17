import type { GithubWebhookEventRequest } from './github-webhook-event-request';
import { InvalidGithubWebhookRequestError } from './invalid-github-webhook-request-error';

export function toGithubWebhookEventRequest<T>(
  projectBody: (value: T) => string | undefined,
  projectHeaderValue: (headerName: string) => (value: T) => string | undefined
): (value: T) => GithubWebhookEventRequest {
  const toEvent = toMandatoryGithubWebhookEventHeader('X-Hub-Event', projectHeaderValue);
  const toId = toMandatoryGithubWebhookEventHeader('X-Hub-Delivery', projectHeaderValue);
  const toSignature = toMandatoryGithubWebhookEventHeader('X-Hub-Signature-256', projectHeaderValue);
  const toPayload = toMandatoryGithubWebhookEventPayload(projectBody);
  return value => ({
    event: toEvent(value),
    id: toId(value),
    signature: toSignature(value),
    payload: toPayload(value)
  });
}

function toMandatoryGithubWebhookEventHeader<T>(
  headerName: string,
  projectHeaderValue: (headerName: string) => (value: T) => string | undefined
): (value: T) => string {
  const toHeaderValue = projectHeaderValue(headerName);
  return value => {
    const headerValue = toHeaderValue(value);
    if (headerValue === undefined) {
      throw new InvalidGithubWebhookRequestError(`missing ${headerName} header`);
    }
    return headerValue;
  };
}

function toMandatoryGithubWebhookEventPayload<T>(projectBody: (value: T) => string | undefined): (value: T) => string {
  return value => {
    const bodyValue = projectBody(value);
    if (bodyValue === undefined) {
      throw new InvalidGithubWebhookRequestError('missing body');
    }
    return bodyValue;
  };
}
