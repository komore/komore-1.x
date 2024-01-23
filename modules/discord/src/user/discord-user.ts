import { type DiscordUserSnowflake } from './snowflake/discord-user-snowflake';

/**
 * Discord user
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object User Object}
 */
export interface DiscordUser {
  /**
   * Accent color
   */
  readonly accent_color?: number | null; // TODO: typed
  /**
   * Avatar hash
   */
  readonly avatar: string | null;
  /**
   * Avatar decoration hash
   */
  readonly avatar_decoration?: string | null;
  /**
   * Banner hash
   */
  readonly banner?: string | null;
  /**
   * Whether the user belongs to an OAuth2 application
   */
  readonly bot?: boolean;
  /**
   * Discord tag
   */
  readonly discriminator: string;
  /**
   * Email address
   */
  readonly email?: string | null;
  /**
   * Flags
   */
  readonly flags?: number | null; // TODO: typed
  /**
   * Global name
   */
  readonly global_name: string | null;
  /**
   * User identifier
   */
  readonly id: DiscordUserSnowflake;
  /**
   * User locale
   */
  readonly locale?: string; // TODO: typed
  /**
   * Whether the user has two-factor enabled
   */
  readonly mfa_enabled?: boolean;
  /**
   * Type of Nitro subscription
   */
  readonly premium_type?: number; // TODO: typed
  /**
   * Public flags
   */
  readonly public_flags?: number; // TODO: typed
  /**
   * Whether the user is an Official Discord System user
   */
  readonly system?: boolean;
  /**
   * User name
   */
  readonly username: string;
  /**
   * Whether the email on this account has been verified
   */
  readonly verified?: boolean;
}
