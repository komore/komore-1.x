import { type AuroraApiClient } from '../aurora-api-client';
import { type RollbackAuroraTransactionParameters } from './rollback-aurora-transaction-parameters';
import { type RollbackAuroraTransactionResult } from './rollback-aurora-transaction-result';

/**
 * Creates a function that rolls an Aurora transaction back
 *
 * @param apiClient Aurora API client
 * @returns Function that rolls an Aurora transaction back
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html RollbackTransaction}
 */
export function rollbackAuroraTransaction(
  apiClient: AuroraApiClient
): (parameters: RollbackAuroraTransactionParameters) => Observable<RollbackAuroraTransactionResult> {
  const operation = 'RollbackTransaction';
  const resourcePath = 'RollbackTransaction';
  return parameters => apiClient({ operation, parameters, resourcePath });
}
