import { type msGraphApiVersions } from './msgraph-api-versions';

/**
 * Microsoft Graph API version
 */
export type MsGraphApiVersion = (typeof msGraphApiVersions)[number];
