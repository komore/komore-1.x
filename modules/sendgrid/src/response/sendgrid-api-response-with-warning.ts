import { type SendGridApiWarning } from './sendgrid-api-warning';

/**
 * SendGrid API response with warning
 */
export type SendGridApiResponseWithWarning<T> = T & { readonly warning?: SendGridApiWarning };
