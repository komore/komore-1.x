import { mapIntegrations } from '@komore/integration';
import { createMessage, to } from '@komore/message';
import * as Discord from 'discord.js';
import { mock } from 'jest-mock-extended';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
