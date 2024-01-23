import { type DiscordApplicationSnowflake } from '../application/snowflake/discord-application-snowflake';
import { type DiscordChannelSnowflake } from '../channel/snowflake/discord-channel-snowflake';
import { type DiscordEmoji } from '../emoji/discord-emoji';
import { type DiscordRole } from '../role/discord-role';
import { type DiscordSticker } from '../sticker/discord-sticker';
import { type DiscordUserSnowflake } from '../user/snowflake/discord-user-snowflake';
import { type DiscordGuildFeature } from './discord-guild-feature';
import { type DiscordWelcomeScreen } from './discord-welcome-screen';
import { type DiscordGuildSnowflake } from './snowflake/discord-guild-snowflake';

/**
 * Discord guild
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object Guild}
 */
export interface DiscordGuild {
  /**
   * Away from keyboard channel identifier
   */
  readonly afk_channel_id: DiscordChannelSnowflake | null;
  /**
   * Away from keyboard timeout, in seconds
   */
  readonly afk_timeout: number;
  /**
   * Application identifier, if the guild was created by a bot
   */
  readonly application_id: DiscordApplicationSnowflake | null;
  /**
   * Approximate number of members
   */
  readonly approximate_member_count?: number;
  /**
   * Approximate number of non-offline members
   */
  readonly approximate_presence_count?: number;
  /**
   * Banner hash
   */
  readonly banner: string | null;
  /**
   * Default message notifications level
   */
  readonly default_message_notifications: number; // TODO: typed
  /**
   * Guild description
   */
  readonly description: string | null;
  /**
   * Discovery splash hash
   */
  readonly discovery_splash: string | null;
  /**
   * List of emojis
   */
  readonly emojis: ReadonlyArray<DiscordEmoji>;
  /**
   * Explicit content filter level
   */
  readonly explicit_content_filter: number; // TODO: typed
  /**
   * List of features
   */
  readonly features: ReadonlyArray<DiscordGuildFeature>;
  /**
   * Icon hash
   */
  readonly icon: string | null;
  /**
   * Icon hash (when in the template object)
   */
  readonly icon_hash?: string | null;
  /**
   * Guild identifier
   */
  readonly id: DiscordGuildSnowflake;
  /**
   * Maxaimum number of members
   */
  readonly max_members?: number | null;
  /**
   * Maximum number of presences
   */
  readonly max_presences?: number | null;
  /**
   * Maximum number of users in a stage video channel
   */
  readonly max_stage_video_channel_users?: number;
  /**
   * Maximum number of users in a video channel
   */
  readonly max_video_channel_users?: number;
  /**
   * Required MFA level
   */
  readonly mfa_level: number;
  /**
   * Guild name
   */
  readonly name: string;
  /**
   * NSFW level
   */
  readonly nsfw_level: number;
  /**
   * Whether the user is the owner
   */
  readonly owner?: boolean;
  /**
   * Owner user identifier
   */
  readonly owner_id: DiscordUserSnowflake;
  /**
   * Total permissions, excluding overwrites and implicit permissions
   */
  readonly permissions?: string;
  /**
   * Preferred locale
   */
  readonly preferred_locale: string;
  /**
   * Whether the boost progress bar is enabled
   */
  readonly premium_progress_bar_enabled: boolean;
  /**
   * Number of boosts
   */
  readonly premium_subscription_count?: number;
  /**
   * Premium tier
   *
   * @note Also known as Server Boost level
   */
  readonly premium_tier: BigInteger;
  /**
   * Channel identifier where admins and moderators receive notices from Discord
   */
  readonly public_updates_channel_id: DiscordChannelSnowflake | null;
  /**
   * List of roles
   */
  readonly roles: ReadonlyArray<DiscordRole>;
  /**
   * Channel identifier where Community guilds display rules and/or guidelines
   */
  readonly rules_channel_id: DiscordChannelSnowflake | null;
  /**
   * Channel identifier where admins and moderators receive safety alerts from Discord
   */
  readonly safety_alerts_channel_id: DiscordChannelSnowflake | null;
  /**
   * Splash hash
   */
  readonly splash: string | null;
  /**
   * List of stickers
   */
  readonly stickers?: ReadonlyArray<DiscordSticker>;
  /**
   * Channel identifier where guild notices are posted
   */
  readonly system_channel_id: DiscordChannelSnowflake | null;
  /**
   * System channel flags
   */
  readonly system_channel_flags: number; // TODO: typed
  /**
   * Vanity URL code
   */
  readonly vanity_url_code: string | null;
  /**
   * Verification level
   */
  readonly verification_level: number; // TODO: typed
  /**
   * Welcome screen shown to new members
   */
  readonly welcome_screen?: DiscordWelcomeScreen;
  /**
   * Widget channel identifier
   */
  readonly widget_channel_id?: DiscordChannelSnowflake;
  /**
   * Whether the server widget is enabled
   */
  readonly widget_enabled?: boolean;
}
/*
  TODO:
  embedded_activities: unknown[]
  guild_scheduled_events: unknown[]
  home_header: xx | null
  hub_type: xx | null
  inventory_settings: xx | null
  latest_onboarding_question_id: xx | null
  lazy: boolean
  soundboard_sounds: unknown[]
  joined_at: DateTimeString
  threads: unknown[]
  member_count: number;
  version: number;
  application_command_counts: number;
  incidents_data: unknown | null
*/
