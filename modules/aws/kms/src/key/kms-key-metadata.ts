import { type DateTimeString } from '@komore/temporal';

import { type KmsKeyArn } from './arn/kms-key-arn';
import { type KmsKeyId } from './id/kms-key-id';
import { type KmsXksKeyConfiguration } from './kms-xks-key-configuration';
import { type KmsKeyManager } from './manager/kms-key-manager';
import { type KmsKeyMultiRegionConfiguration } from './multi-region/kms-key-multi-region-configuration';
import { type KmsKeyOrigin } from './origin/kms-key-origin';
import { type KmsKeySpec } from './spec/kms-key-spec';
import { type KmsKeyState } from './state/kms-key-state';
import { type KmsKeyUsage } from './usage/kms-key-usage';

/**
 * KMS key metadata
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_KeyMetadata.html KeyMetadata}
 */
export interface KmsKeyMetadata {
  /**
   * Key ARN
   */
  readonly Arn: KmsKeyArn;
  /**
   * CloudHSM cluster identifier
   */
  readonly CloudHsmClusterId?: string; // TODO: typed
  /**
   * Date and time the key was created
   */
  readonly CreationDate: DateTimeString;
  /**
   * Custom key store identifier
   */
  readonly CustomKeyStoreId?: string; // TODO: typed
  /**
   * Date and time the key is scheduled for deletion
   */
  readonly DeletionDate?: DateTimeString;
  /**
   * Key description
   */
  readonly Description?: string;
  /**
   * Whether the key is enabled
   */
  readonly Enabled?: boolean;
  /**
   * Encryption algorithms
   *
   * @note Only present when `KEY_USAGE` is `ENCRYPT_DECRYPT`
   */
  readonly EncryptionAlgorithms?: ReadonlyArray<string>; // TODO: typed
  /**
   * Expiration model
   */
  readonly ExpirationModel?: string; // TODO: typed
  /**
   * Key identifier
   */
  readonly KeyId: KmsKeyId;
  /**
   * Key manager
   */
  readonly KeyManager: KmsKeyManager;
  /**
   * Key type
   */
  readonly KeySpec: KmsKeySpec;
  /**
   * Key state
   */
  readonly KeyState: KmsKeyState;
  /**
   * Key usage
   */
  readonly KeyUsage: KmsKeyUsage;
  /**
   * List of MAC algorithms
   *
   * @note Only present for an HMAC KMS key
   */
  readonly MacAlgorithms?: ReadonlyArray<string>; // TODO: typed
  /**
   * Whether the key is multi-region or not
   */
  readonly MultiRegion: boolean;
  /**
   * Multi-region configuration
   */
  readonly MultiRegionConfiguration?: KmsKeyMultiRegionConfiguration;
  /**
   * Source of the key material for the key
   */
  readonly Origin: KmsKeyOrigin;
  /**
   * Waiting period before the primary key is deleted
   *
   * @note Only valid when `KeyUsage` is `SIGN_VERIFY`
   */
  readonly PendingDeletionWindowInDays?: number;
  /**
   * List of signing algorithms that the KMS key supports
   */
  readonly SigningAlgorithms: ReadonlyArray<string>; // TODO: typed
  /**
   * Date and time until which the imported key material expires
   */
  readonly ValidTo?: DateTimeString;
  /**
   * Information about the external key that is associated with a KMS key in an external key store
   */
  readonly XksKeyConfiguration?: KmsXksKeyConfiguration;
}
