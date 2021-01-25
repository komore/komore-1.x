import type { LayerImplementationFactory } from '@komore/layer';
import type { EmailLayer } from './email-layer';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_LAYER_EMAIL_DISABLE_AMAZON_SES?: string;
      KMR_LAYER_EMAIL_DISABLE_MAILCHIMP?: string;
      KMR_LAYER_EMAIL_DISABLE_SENDGRID?: string;
    }
  }
}

export function getEmailImplementationFactories(): ReadonlyArray<LayerImplementationFactory<EmailLayer>> {
  const emailImplementationFactories: Array<LayerImplementationFactory<EmailLayer>> = [];

  if (process.env.KMR_LAYER_EMAIL_DISABLE_AMAZON_SES === undefined) {
    emailImplementationFactories.push(() =>
      import('@komore/integration-amazon/ses/layer').then(({ createSESEmailLayer }) => createSESEmailLayer())
    );
  }

  if (process.env.KMR_LAYER_EMAIL_DISABLE_MAILCHIMP === undefined) {
    emailImplementationFactories.push(() =>
      import('@komore/integration-mailchimp/layer').then(({ createMailchimpEmailLayer }) => createMailchimpEmailLayer())
    );
  }

  if (process.env.KMR_LAYER_EMAIL_DISABLE_SENDGRID === undefined) {
    emailImplementationFactories.push(() =>
      import('@komore/integration-sendgrid/layer').then(({ createSendgridEmailLayer }) => createSendgridEmailLayer())
    );
  }

  return emailImplementationFactories;
}
