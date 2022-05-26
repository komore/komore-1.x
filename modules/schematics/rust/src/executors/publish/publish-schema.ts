/**
 * Publish schema
 */
export interface PublishSchema {
  readonly allowDirty: boolean;
  readonly dryRun: boolean;
  readonly registry?: string;
  readonly verify: boolean;
}
