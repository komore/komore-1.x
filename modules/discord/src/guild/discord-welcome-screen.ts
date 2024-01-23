import { type DiscordWelcomeScreenChannel } from './discord-welcome-screen-channel';

/**
 * Discord welcome screen
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object Welcome Screen}
 */
export interface DiscordWelcomeScreen {
  /**
   * Description
   */
  readonly description: string | null;
  /**
   * List of channels shown on the welcome screen
   */
  readonly welcome_channels: ReadonlyArray<DiscordWelcomeScreenChannel>;
}
