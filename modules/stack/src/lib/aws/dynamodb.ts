import { AbstractStackNode, StackNode } from '../../stack';
import { StoreNode } from '../store-node';

/**
 * DynamoDB billing mode
 */
type DynamoDBBillingMode = 'PROVISIONED' | 'PAY_PER_REQUEST';
type DynamoDBStreamViewType = 'KEYS_ONLY' | 'NEW_IMAGE' | 'OLD_IMAGE' | 'NEW_AND_OLD_IMAGES';

/**
 * DynamoDB node
 */
interface DynamoDBNode extends StoreNode {}

/**
 * DynamoDB node properties
 */
type DynamoDBNodeProperties = Readonly<{
  /**
   * Table name
   */
  tableName: string;

  /**
   * Billing mode
   * 
   * By default, the billing mode is set to `PROVISIONED`.
   */
  billingMode?: DynamoDBBillingMode;

  /**
   * Hash key
   */
  hashKey: string;

  /**
   * Range key
   */
  rangeKey?: string;

  /**
   * Capacity
   */
  capacity?: Readonly<{
    readUnits: number;
    writeUnits: number;
  }>;

  /**
   * Replicas configuration
   */
  replicas?: ReadonlyArray<Readonly<{
    /**
     * Region name for the replica
     */
    regionName: string;
  }>>;

  /**
   * Streaming configuration
   */
  stream?: Readonly<{
    /**
     * View type for the stream
     */
    viewType: DynamoDBStreamViewType;
  }>;

  /**
   * Time-to-live configuration
   */
  ttl?: Readonly<{
    /**
     * The name of the attribute holding the TTL timestamp
     */
    attributeName: string;
  }>;
}>;

/**
 * DynamoDB node implementation
 */
class DynamoDBNodeImpl extends AbstractStackNode<DynamoDBNodeProperties> {
  /**
   * Class constructor
   * @param nodeProperties Node properties
     */
  constructor(nodeProperties: DynamoDBNodeProperties) {
    super('aws:dynamodb', nodeProperties);
  }
}

/**
 * DynamoDB reference node
 */
interface DynamoDBReferenceNode extends StackNode {

}

/**
 * DynamoDB reference node
 */
type DynamoDBReferenceNodeProperties = Readonly<{
  tableName: string;
}>;

/**
 * DynamoDB reference node implementation
 */
class DynamoDBReferenceNodeImpl extends AbstractStackNode<DynamoDBReferenceNodeProperties> implements DynamoDBReferenceNode {
  /**
   * Class constructor
   * @param tableName Table name
   */
  constructor(tableName: string) {
    super('aws:dynamodb:reference', { tableName });
  }
}

/**
 * Create a DynamoDB reference node
 * @param tableName Table name
 * @returns DynamoDB reference node
 */
export function createDynamoDBNode(tableName: string): DynamoDBReferenceNode;

/**
 * Create a DynamoDB node
 * @param properties DynamoDB node properties
 * @returns DynamoDB node
 */
export function createDynamoDBNode(properties: DynamoDBNodeProperties): DynamoDBNode;

/**
 * Create a DynamoDB node
 * @param tableNameOrProperties DynamoDB table name or node properties
 * @returns DynamoDB node
 */
export function createDynamoDBNode(tableNameOrProperties: string | DynamoDBNodeProperties): DynamoDBReferenceNode | DynamoDBNode {
  if (typeof tableNameOrProperties === 'string') {
    return new DynamoDBReferenceNodeImpl(tableNameOrProperties);
  }

  return new DynamoDBNodeImpl(tableNameOrProperties);
}
