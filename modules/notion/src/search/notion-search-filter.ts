import { type NotionObjectTypes } from '../object/notion-object-types';

/**
 * Notion search filter
 */
export interface NotionSearchFilter<ObjectType extends keyof NotionObjectTypes> {
  readonly property: 'object';
  readonly value: ObjectType;
}
