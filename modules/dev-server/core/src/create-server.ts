import { of } from '@komore/reactive';
import { mergeMap } from '@komore/reactive/operators';
import { createHttpServer } from './http/create-http-server';
import type { ServerConfiguration } from './server-configuration';

/**
 * Creates a server
 * @param serverConfiguration Server configuration
 */
export function createServer(/*serverConfiguration*/_: ServerConfiguration) {
  const httpServer = createHttpServer($ => $.pipe(
    mergeMap(x => {
      console.log('weee', x);
      return of(x);
    })
  ), {
    port: 4321
  });
  console.log('booya', httpServer.address());
}
