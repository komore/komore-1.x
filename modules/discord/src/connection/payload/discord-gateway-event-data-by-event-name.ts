import {
  type DiscordChannelUpdateEventData,
  type discordChannelUpdateEventName,
} from '../data/discord-channel-update-event-data';
import {
  type DiscordGuildCreateEventData,
  type discordGuildCreateEventName,
} from '../data/discord-guild-create-event-data';
import {
  type DiscordUserUpdateEventData,
  type discordUserUpdateEventName,
} from '../data/discord-user-update-event-data';

/**
 * Discord gateway event data by event name
 */
export interface DiscordGatewayEventDataByEventName {
  [discordChannelUpdateEventName]: DiscordChannelUpdateEventData;
  [discordGuildCreateEventName]: DiscordGuildCreateEventData;
  [discordUserUpdateEventName]: DiscordUserUpdateEventData;
}
