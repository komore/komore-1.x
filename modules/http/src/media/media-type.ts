import { type mediaTypes } from './media-types';

/**
 * Media type
 */
export type MediaType = (typeof mediaTypes)[number] | `application/vnd.${string}`;
