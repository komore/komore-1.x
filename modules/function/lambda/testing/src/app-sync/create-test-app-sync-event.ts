import type { AppSyncEvent } from '@komore/function-lambda/app-sync';

export function createTestAppSyncEvent<ArgumentsType>(arguments: ArgumentsType, identity: ): AppSyncEvent<ArgumentsType> {
  return {
    arguments
  };
}