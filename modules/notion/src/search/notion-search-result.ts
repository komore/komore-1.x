import { type NotionObjectTypes } from '../object/notion-object-types';

/**
 * Notion search result
 */
export interface NotionSearchResult<ObjectType extends keyof NotionObjectTypes> {}
