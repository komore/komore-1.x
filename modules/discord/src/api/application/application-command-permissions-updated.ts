import { type DiscordSnowflake } from '../snowflake/discord-snowflake';
import { type ApplicationCommandPermission } from './application-command-permission';

/**
 * Application command permissions updated
 */
export interface ApplicationCommandPermissionsUpdated {
  readonly applicationId: DiscordSnowflake;
  readonly guildId: DiscordSnowflake;
  readonly id: DiscordSnowflake;
  readonly permissions: ReadonlyArray<ApplicationCommandPermission>;
}
