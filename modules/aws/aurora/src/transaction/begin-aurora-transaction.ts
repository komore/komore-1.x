import { type AuroraApiClient } from '../aurora-api-client';
import { type BeginAuroraTransactionParameters } from './begin-aurora-transaction-parameters';
import { type BeginAuroraTransactionResult } from './begin-aurora-transaction-result';

/**
 * Creates a function that begins an Aurora transaction
 *
 * @param apiClient Aurora API client
 * @returns Function that begins an Aurora transaction
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html BeginTransaction}
 */
export function beginAuroraTransaction(
  apiClient: AuroraApiClient
): (parameters: BeginAuroraTransactionParameters) => Observable<BeginAuroraTransactionResult> {
  const operation = 'BeginTransaction';
  const resourcePath = 'BeginTransaction';
  return parameters => apiClient({ operation, parameters, resourcePath });
}
