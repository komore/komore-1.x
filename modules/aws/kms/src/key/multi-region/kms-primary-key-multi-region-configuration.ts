import { type KmsMultiRegionKey } from './kms-multi-region-key';

/**
 * KMS primary key multi-region configuration
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_MultiRegionConfiguration.html MultiRegionConfiguration}
 */
export interface KmsPrimaryKeyMultiRegionConfiguration {
  /**
   * Multi-region key type
   */
  readonly MultiRegionKeyType: 'PRIMARY';
  /**
   * Primary key
   */
  readonly PrimaryKey: KmsMultiRegionKey;
}
