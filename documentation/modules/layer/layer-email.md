# Layer - Email

The email layer module is an abstraction for sending emails.

## Key Concepts

- Emails can be [sent]
- Content can use [native templates] or [Templates] can be managed  can be managed via the native implementation or 
- [Templates] can be managed with the native

## Layer Implementations

| Implementation | Module                                 | Provider | Pricing              |
| :------------- | :------------------------------------- | :------------ | :------------------- |
| [Amazon SES Email Layer]   | `@komore/integration-amazon/ses/layer` | [Amazon SES] | [Amazon SES Pricing] |
| [Mailchimp]    | `@komore/integration-mailchimp/layer`  | [Mailchimp]               | [Mailchimp Pricing]  |
| [SendGrid]     | `@komore/integration-sendgrid/layer`   |               | [SendGrid Pricing]   |

[amazon ses]: https://aws.amazon.com/ses/
[amazon ses pricing]: https://aws.amazon.com/ses/pricing/
[mailchimp]: https://mailchimp.com/
[mailchimp pricing]: https://mailchimp.com/pricing/transactional-email/
[sendgrid]: https://sendgrid.com/
[sendgrid pricing]: https://sendgrid.com/pricing/
