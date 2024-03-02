import { type ReadonlyRecord } from '@komore/typescript';

/**
 * DynamoDB event stream record attribute value
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_AttributeValue.html AttributeValue}
 */
export interface DynamoDBEventStreamRecordAttributeValue {
  /**
   * Attribute of type Binary
   */
  readonly B?: string;
  /**
   * Attribute of type Binary Set
   */
  readonly BS?: ReadonlyArray<string>;
  /**
   * Attribute of type Boolean
   */
  readonly BOOL?: boolean;
  /**
   * Attribute of type List
   */
  readonly L?: ReadonlyArray<DynamoDBEventStreamRecordAttributeValue>;
  /**
   * Attribute of type Map
   */
  readonly M?: ReadonlyRecord<string, DynamoDBEventStreamRecordAttributeValue>;
  /**
   * Attribute of type Number
   */
  readonly N?: string;
  /**
   * Attribute of type Number Set
   */
  readonly NS?: ReadonlyArray<string>;
  /**
   * Attribute of type Null
   */
  readonly NULL?: boolean;
  /**
   * Attribute of type String
   */
  readonly S?: string;
  /**
   * Attribute of type String Set
   */
  readonly SS?: ReadonlyArray<string>;
}
