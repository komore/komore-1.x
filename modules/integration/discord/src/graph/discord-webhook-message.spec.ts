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


import { createFunction } from '@komore/function';
import { httpRequestPayload } from '@komore/function-lambda';
import { from, mapOutput, to } from '@komore/message';
import { withComprehendClient } from '@komore/integration-aws/comprehend';
import { withRekognitionClient } from '@komore/integration-aws/rekognition';

export const getTextImageSentiment = createFunction({
  // boring config stuff here
}).pipe(
  from(httpRequestPayload),
  withRekognitionClient(),
  withComprehendClient(),
  to(detectedText),
  to(detectedSentiment),
  mapOutput(({ output }) => ({
    detectedSentiment: output.Sentiment,
    score: output.SentimentScore
  }))
);
