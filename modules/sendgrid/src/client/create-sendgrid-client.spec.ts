import { createSendGridClient } from './create-sendgrid-client';

describe('Create SendGrid client', () => {
  it.skip('can create a client with a provided API key and endpoint URL', () => {
    createSendGridClient();
  });

  it.skip('does not attempt to set a base URL when no endpoint URL is provided', () => {
  });

  it.skip('uses the KMR_INTEGRATION_SENDGRID_APIKEY environment variable when no API key is provided', () => {
  });

  it.skip('uses the standard SENDGRID_API_KEY environment variable as a fallback mechanism', () => {
  });
});
