import { type KmsMultiRegionKey } from './kms-multi-region-key';

/**
 * KMS replica keys multi-region configuration
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_MultiRegionConfiguration.html MultiRegionConfiguration}
 */
export interface KmsReplicaKeysMultiRegionConfiguration {
  /**
   * Multi-region key type
   */
  readonly MultiRegionKeyType: 'REPLICA';
  /**
   * Replica keys
   */
  readonly ReplicaKeys: ReadonlyArray<KmsMultiRegionKey>;
}
