import { ApiType } from './api';
import { ApiNode } from './api-node';
import { ApiSchemaNode } from './api-schema-node';
import { AbstractStackNode, StackNode } from '../stack';
import { StoreNode } from './store-node';
import { Value, ValueType } from '../value';

/**
 * Stack root node
 */
export interface StackRootNode extends StackNode {
  /**
   * Defines an API
   * @param apiName API name
   * @param apiSchema API schema
   * @param api API
   * @typeparam T API type
   * @returns this
   */
  api<T extends ApiType>(apiName: string, apiSchema: ApiSchemaNode<T>, api: ApiNode<T>): this;

  /**
   * Defines a local variable
   * @param localName Local name
   * @param localValue Value
   * @returns this
   */
  local(localName: string, value: ValueType): this;

  /**
   * Defines a store
   * @param storeName Store name
   * @param store Store
   * @returns this
   */
  store(storeName: string, store: StoreNode): this;

  /**
   * Declares a variable
   * @param variableName Variable name
   * @param variableDescription Variable description
   * @returns this
   */
  variable(variableName: string, variableDescription: string);

  /**
   * Declares a variable with a default value
   * @param variableName Variable name
   * @param variableDescription Variable description
   * @param defaultValue Default value
   * @returns this
   */
  variable(variableName: string, variableDescription: string, defaultValue: ValueType): this;

  /**
   * Defines an output
   * @param outputName Output name
   * @param outputDescription Output description
   * @param value Value
   * @returns this
   */
  output(outputName: string, outputDescription: string, value: ValueType): this;
}

/**
 * Local variable definition
 */
class LocalDefinition {
  /**
   * Class constructor
   * @param localName Local name
   * @param localValue Local value
   */
  constructor(readonly localName: string, readonly localValue: Value) {}
}

class ApiDefinition {
  /**
   * Class constructor
   * @param apiName API name
   * @param apiSchema API schema
   * @param api API
   */
  constructor(readonly apiName: string, readonly apiSchema: ApiSchemaNode, readonly api: ApiNode) {}
}

/**
 * Stack root node properties
 */
type StackRootNodeProperties = Readonly<{
  readonly stackName: string;
}>;

/**
 * Stack root node implementation
 */
export class StackRootNodeImpl extends AbstractStackNode<StackRootNodeProperties> implements StackRootNode {
  private readonly locals: Array<LocalDefinition>;
  private readonly apis: Array<ApiDefinition>;

  /**
   * Class constructor
   * @param stackName Stack name
   */
  constructor(readonly stackName) {
    super('stack', { stackName });
  }

  /**
   * Defines an API
   * @param apiName API name
   * @param apiSchema API schema
   * @param api API
   * @returns this
   */
  api(apiName: string, apiSchema: ApiSchemaNode, api: ApiNode): this {
    this.apis.push(new ApiDefinition(apiName, apiSchema, api));
    return this;
  }

  /**
   * Defines a local variable
   * @param localName Local name
   * @param localValue Value
   * @returns this
   */
  local(localName: string, value: ValueType): this {
    this.locals.push(new LocalDefinition(localName, value));
    return this;
  }

  /**
   * Defines a store
   * @param storeName Store name
   * @param store Store
   * @returns this
   */
  store(storeName: string, store: StoreNode): this {
    return this;
  }

  /**
   * Declares a variable with a default value
   * @param variableName Variable name
   * @param variableDescription Variable description
   * @param defaultValue Default value
   * @returns this
   */
  variable(variableName: string, variableDescription: string, defaultValue?: ValueType): this {
    return this;
  }

  /**
   * Defines an output
   * @param outputName Output name
   * @param outputDescription Output description
   * @param value Value
   * @returns this
   */
  output(outputName: string, outputDescription: string, value: ValueType): this {
    return this;
  }
}

/**
 * Create a stack
 * @param stackName Stack name
 * @returns Stack node
 */
export function stack(stackName: Value | string): StackRootNode {
  return new StackRootNodeImpl(name);
}
