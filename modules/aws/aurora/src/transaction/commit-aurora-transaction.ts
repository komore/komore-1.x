import { type AuroraApiClient } from '../aurora-api-client';
import { auroraTargetPrefix } from '../aurora-target-prefix';
import { type CommitAuroraTransactionParameters } from './commit-aurora-transaction-parameters';
import { type CommitAuroraTransactionResult } from './commit-aurora-transaction-result';

/**
 * Creates a function that commits an Aurora transaction
 *
 * @param apiClient Aurora API client
 * @returns Function that commits an Aurora transaction
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html CommitTransaction}
 */
export function commitAuroraTransaction(
  apiClient: AuroraApiClient
): (parameters: CommitAuroraTransactionParameters) => Observable<CommitAuroraTransactionResult> {
  return parameters =>
    apiClient({
      operation: `${auroraTargetPrefix}.CommitTransaction`,
      parameters,
      resourcePath: 'CommitTransaction',
    });
}
