import { mapIntegrations } from '@komore/integration';
import { createMessage, to } from '@komore/message';
import { of } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type * as Discord from 'discord.js';
import { mock } from 'jest-mock-extended';
import { discordWebhookMessage } from './discord-webhook-message';

describe('Discord webhook message flow', () => {
  const mockwebhookClient = mock<Discord.WebhookClient>();

  it('sends a message', () => {
    const message = createMessage('hello', {});
    of(message).pipe(
      mapIntegrations(integrations => ({
        ...integrations,
        discord: {
          webhookClient: mockwebhookClient
        }
      })),
      to(discordWebhookMessage, () => ({
        content: 'hello world',
        options: {}
      })),
      map(x => {
        return x;
      })
    );
  });
});
