import { type kmsKeySpecs } from './kms-key-specs';

/**
 * KMS key specification
 */
export type KmsKeySpec = (typeof kmsKeySpecs)[number];
