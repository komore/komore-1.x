import { type applicationCommandPermissionTypes } from './application-command-permission-types';

/**
 * Application command permission type
 */
export type ApplicationCommandPermissionType =
  (typeof applicationCommandPermissionTypes)[keyof typeof applicationCommandPermissionTypes];
