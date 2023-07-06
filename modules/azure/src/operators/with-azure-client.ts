import { mapMetadata } from '@komore/message';
import { pipe } from '@komore/reactive/operators';
import { withAzureMetadata } from './with-azure-metadata';
import { hasAzureMetadata } from '../graph/has-azure-metadata';

/**
 * Operator function that adds an Azure client to an emitted message
 * @param clientType Client type
 * @param client Client
 * @template ClientTypeName Client type name
 * @template ClientType Client type
 */
export const withAzureClient = <ClientTypeName extends string, ClientType>(
  clientType: ClientTypeName,
  client: ClientType
) =>
  pipe(
    withAzureMetadata,
    mapMetadata(message => ({
      ...message.metadata,
      azure: {
        ...(hasAzureMetadata(message) ? message.metadata.azure : undefined),
        [clientType]: client
      }
    }))
  );
