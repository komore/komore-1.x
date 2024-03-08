import { type kmsKeyStates } from './kms-key-states';

/**
 * KMS key state
 */
export type KmsKeyState = (typeof kmsKeyStates)[number];
