import { type kmsKeyManagers } from './kms-key-managers';

/**
 * KMS key manager
 */
export type KmsKeyManager = (typeof kmsKeyManagers)[number];
