# komore/discord

Support [komore] integration with [Discord] servers.

## Install

The `@komore/discord` module can be installed via Npm or Yarn:

```shell
npm install @komore/discord --save
```

```shell
yarn add @komore/discord
```

## Configure

```typescript
import { withDiscordWebhookClient } from '@komore/integration-discord';

$.pipe(
  withDiscordWebhookClient('<webhook-id>', '<webhook-token>'),
  toDiscordWebhookMessage(() => 'Hello world')
);
```

## Low-level Functions

- `sendDiscordWebhook`

[Discord]: https://discord.com/
[komore]: https://komore.dev
