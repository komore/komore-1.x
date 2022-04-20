import { type DiscordBotStackModuleOptions } from './discord/discord-bot-stack-module-options';
import { type GithubBotStackModuleOptions } from './github/github-discord-bot-stack-module-options';
import { type SlackBotStackModuleOptions } from './slack/slack-bot-stack-module-options';

/**
 * Bot stack module options
 */
export interface BotStackModuleOptions {
  readonly discord?: DiscordBotStackModuleOptions;
  readonly github?: GithubBotStackModuleOptions;
  readonly slack?: SlackBotStackModuleOptions;
}
