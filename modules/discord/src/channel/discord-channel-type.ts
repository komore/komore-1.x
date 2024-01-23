import { type discordChannelTypes } from './discord-channel-types';

/**
 * Discord channel type
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-types Channel Types}
 */
export type DiscordChannelType = (typeof discordChannelTypes)[keyof typeof discordChannelTypes];
