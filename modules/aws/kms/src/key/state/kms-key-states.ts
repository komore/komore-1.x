/**
 * KMS key states
 */
export const kmsKeyStates = [
  /**
   * Creation in progress
   */
  'Creating',
  /**
   * Disabled key
   */
  'Disabled',
  /**
   * Enabled key
   */
  'Enabled',
  /**
   * Deletion is scheduled
   */
  'PendingDeletion',
  /**
   * Pending import
   */
  'PendingImport',
  /**
   * Replica deletion scheduled
   */
  'PendingReplicaDeletion',
  /**
   * Unavailable
   */
  'Unavailable',
  /**
   * Update in progress
   */
  'Updating',
] as const;
