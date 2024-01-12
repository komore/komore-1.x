import { type SendGridClientOptions } from '@komore/sendgrid';

/**
 * SendGrid email layer options
 */
export interface SendGridEmailLayerOptions {
  /**
   * Client options
   */
  readonly clientOptions: SendGridClientOptions;
}
