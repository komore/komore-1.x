import { type DiscordHeartbeatEventData, type discordHeartbeatOpcode } from '../data/discord-heartbeat-event-data';
import { type DiscordIdentifyEventData, type discordIdentifyOpcode } from '../data/discord-identify-event-data';
import {
  type DiscordRequestGuildMembersEventData,
  type discordRequestGuildMembersOpcode,
} from '../data/discord-request-guild-members-event-data';
import { type DiscordResumeEventData, type discordResumeOpcode } from '../data/discord-resume-event-data';
import {
  type DiscordUpdatePresenceEventData,
  type discordUpdatePresenceOpcode,
} from '../data/discord-update-presence-event-data';
import {
  type DiscordUpdateVoiceStateEventData,
  type discordUpdateVoiceStateOpcode,
} from '../data/discord-update-voice-state-event-data';

/**
 * Discord send event data by opcode
 */
export interface DiscordSendEventDataByOpcode {
  [discordHeartbeatOpcode]: DiscordHeartbeatEventData;
  [discordIdentifyOpcode]: DiscordIdentifyEventData;
  [discordResumeOpcode]: DiscordResumeEventData;
  [discordRequestGuildMembersOpcode]: DiscordRequestGuildMembersEventData;
  [discordUpdatePresenceOpcode]: DiscordUpdatePresenceEventData;
  [discordUpdateVoiceStateOpcode]: DiscordUpdateVoiceStateEventData;
}
