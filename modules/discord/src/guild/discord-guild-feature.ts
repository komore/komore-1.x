import { discordGuildFeatures } from './discord-guild-features';

/**
 * Discord guild feature
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-features Guild Features}
 */
export type DiscordGuildFeature = (typeof discordGuildFeatures)[number];
