import { type DateTimeString } from '@komore/temporal';

import { type DiscordChannel } from '../../channel/discord-channel';
import { type DiscordGuild } from '../../guild/discord-guild';
import { type DiscordGuildMember } from '../../guild/discord-guild-member';
import { type DiscordUnavailableGuild } from '../../guild/discord-unavailable-guild';
import { type DiscordVoiceState } from '../../voice/discord-voice-state';
import { type DiscordPresenceUpdate } from '../../presence/discord-presence-update';

/**
 * Discord guild create event data
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-create Guild Create}
 */
export type DiscordGuildCreateEventData =
  | (DiscordGuild & {
      /**
       * List of channels
       */
      readonly channels: ReadonlyArray<DiscordChannel>;
      /**
       * Date and time when the guild was joined
       */
      readonly joinedAt: DateTimeString;
      /**
       * Whether the guild is considered large
       */
      readonly large: boolean;
      /**
       * Member count
       */
      readonly member_count: number;
      /**
       * List of members
       */
      readonly members: ReadonlyArray<DiscordGuildMember>;
      /**
       * List of presence updates
       */
      readonly presences: ReadonlyArray<Partial<DiscordPresenceUpdate>>;
      /**
       * List of threads
       */
      readonly threads: ReadonlyArray<DiscordChannel>;
      /**
       * Whether the guild is unavailable due to an outage
       */
      readonly unavailable: false;
      /**
       * States of members currently in voice channels
       */
      readonly voice_states: ReadonlyArray<Partial<DiscordVoiceState>>;
    })
  | DiscordUnavailableGuild;

/**
 * Discord guild create event name
 */
export const discordGuildCreateEventName = 'GUILD_CREATE';
