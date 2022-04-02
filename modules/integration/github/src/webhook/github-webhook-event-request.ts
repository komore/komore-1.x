/**
 * GitHub Webhook event request
 */
export interface GithubWebhookEventRequest {
  readonly event: string;
  readonly id: string;
  readonly payload: string;
  readonly signature: string;
}
