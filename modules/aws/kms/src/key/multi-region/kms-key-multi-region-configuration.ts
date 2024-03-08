import { type KmsPrimaryKeyMultiRegionConfiguration } from './kms-primary-key-multi-region-configuration';
import { type KmsReplicaKeysMultiRegionConfiguration } from './kms-replica-keys-multi-region-configuration';

/**
 * KMS key multi-region configuration
 */
export type KmsKeyMultiRegionConfiguration =
  | KmsPrimaryKeyMultiRegionConfiguration
  | KmsReplicaKeysMultiRegionConfiguration;
