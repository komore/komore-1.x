import { pipe } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

export const withBigtableInstance(instanceName: string) =>
  map((message: MessageWithBigtableClient) => message.bigtableClient.instance(instanceName))
    return pipe(
      map(message => ({
        ...message,
        integration: {
          ...message.integration,
          gcp: {
            ...message.integration.gcp,

          }
        }
      }))
    );
}
// TODO: bigtableClient.instance(instanceName);
