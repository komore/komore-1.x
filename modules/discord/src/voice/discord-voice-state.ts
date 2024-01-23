import { type DateTimeString } from '@komore/temporal';

import { type DiscordChannelSnowflake } from '../channel/snowflake/discord-channel-snowflake';
import { type DiscordGuildMember } from '../guild/discord-guild-member';
import { type DiscordGuildSnowflake } from '../guild/snowflake/discord-guild-snowflake';
import { type DiscordUserSnowflake } from '../user/snowflake/discord-user-snowflake';

/**
 * Discord voice state
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-state-object Voice State}
 */
export interface DiscordVoiceState {
  /**
   * Guild identifier
   */
  readonly guild_id?: DiscordGuildSnowflake;
  /**
   * Channel identifier
   */
  readonly channel_id: DiscordChannelSnowflake | null;
  /**
   * User identifier
   */
  readonly user_id: DiscordUserSnowflake;
  readonly member?: DiscordGuildMember;
  readonly session_id: string;
  readonly deaf: boolean;
  readonly mute: boolean;
  readonly self_deaf: boolean;
  readonly self_mute: boolean;
  readonly self_stream?: boolean;
  readonly self_video: boolean;
  readonly suppress: boolean;
  readonly request_To_speak_timestamp: DateTimeString | null;
}
