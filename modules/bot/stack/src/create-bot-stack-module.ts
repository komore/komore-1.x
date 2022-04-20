import { defineModule, variables } from '@komore/stack';

/**
 * Creates a bot stack module
 *
 * @param options Bot stack module options
 */
export function createBotStackModule(options: BotStackModuleOptions) {
  return defineModule('bot', $ =>
    $.pipe(
      variables({
        discordToken: {
          description: 'Discord bot token',
          sensitive: true,
          type: 'string',
        },
        slackBotToken: {
          description: 'Slack bot token',
          sensitive: true,
          type: 'string',
        },
      })
    )
  );
}
