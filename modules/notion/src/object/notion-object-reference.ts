import { type NotionObjectIdTypes } from './notion-object-id-types';

/**
 * Notion object reference
 *
 * @template ObjectType Object type
 */
export interface NotionObjectReference<ObjectType extends keyof NotionObjectIdTypes = keyof NotionObjectIdTypes> {
  /**
   * Referenced object identifier
   */
  readonly id: NotionObjectIdTypes[ObjectType];
  /**
   * Referenced object type
   */
  readonly type: ObjectType;
}
