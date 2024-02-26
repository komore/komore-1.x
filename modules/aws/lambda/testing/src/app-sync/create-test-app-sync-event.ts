import { type AppSyncEvent } from '@komore/aws/lambda/app-sync';

export function createTestAppSyncEvent<ArgumentsType>(arguments: ArgumentsType, identity: ): AppSyncEvent<ArgumentsType> {
  return {
    arguments
  };
}
