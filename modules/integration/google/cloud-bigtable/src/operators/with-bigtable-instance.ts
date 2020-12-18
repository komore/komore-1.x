import { Observable, OperatorFunction, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export function withBigtableInstance(instanceName: string): OperatorFunction<Observable<MessageWithBigtableClient>, Observable<MessageWithBigtableInstance>> {
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