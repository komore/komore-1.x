import { OperatorFunction, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

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
