import { type DiscordSnowflake } from '../snowflake/discord-snowflake';
import { type ApplicationCommandPermissionType } from './application-command-permission-type';

/**
 * Application command permission
 */
export interface ApplicationCommandPermission {
  readonly id: DiscordSnowflake;
  readonly permission: boolean;
  readonly type: ApplicationCommandPermissionType;
}
