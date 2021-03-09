import { createArn } from '@komore/dev-server-local-amazon/service';
import { v4 as uuid } from 'uuid';

export const lambdaNamespace = 'lambda' as const;
const functionResourceType = 'function' as const;
const layerResourceType = 'layer' as const;
const eventSourceMappingResourceType = 'event-source-mapping' as const;

/**
 * Creates a function ARN
 * @param functionName Function name
 * @param versionOrAlias Version or alias
 * @returns Function ARN
 */
export function createFunctionArn(functionName: string, versionOrAlias?: string): string {
  const resourceId = versionOrAlias !== undefined ? `${functionName}:${versionOrAlias}` : functionName;
  return createArn(lambdaNamespace, functionResourceType, resourceId);
}

/**
 * Creates a layer ARN
 * @param layerName Layer name
 * @param version Version
 * @returns Layer ARN
 */
export function createLayerArn(layerName: string, version?: string): string {
  const resourceId = version !== undefined ? `${layerName}:${version}` : layerName;
  return createArn(lambdaNamespace, layerResourceType, resourceId);
}

/**
 * Generates an event source mapping ARN
 * @returns Event source mapping ARN
 */
export function generateEventSourceMappingArn(): string {
  const eventSourceMappingId = uuid();
  return createArn(lambdaNamespace, eventSourceMappingResourceType, eventSourceMappingId);
}
