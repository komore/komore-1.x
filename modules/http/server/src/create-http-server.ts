import { createServer } from 'node:http';

import { map, mergeMap, Observable, of, Subject, tapNext } from '@komore/reactive';

import { type HttpServer } from './http-server';
import { type HttpServerOptions } from './http-server-options';
import { type HttpServerPipelineContext } from './pipeline/http-server-pipeline-context';
import { nodeRequestToHttpServerPipelineContextSubject } from './pipeline/node-request-to-http-server-pipeline-context-subject';
import { incomingMessageToHttpServerRequest } from './request/incoming-message-to-http-server-request';

/**
 * Creates an HTTP server
 *
 * @param serverOptions HTTP server options
 * @returns HTTP server
 */
export function createHttpServer(serverOptions: HttpServerOptions): Observable<HttpServer> {
  const { handler, host } = serverOptions;
  const port = parsePort(serverOptions.port);

  return new Observable<HttpServer>(subscriber => {
    const subject = new Subject<HttpServerPipelineContext>();
    const server = createServer({}, nodeRequestToHttpServerPipelineContextSubject(serverOptions, subject));
    const requestPipeline = subject.asObservable().pipe(
      map(
        ([nodeHttpRequest, toServerResponse]) =>
          [incomingMessageToHttpServerRequest(nodeHttpRequest), toServerResponse] as const
      ),
      tapNext(([httpServerRequest]) =>
        console.log(`[HTTP] ${httpServerRequest.method} ${httpServerRequest.url.pathname}`)
      ),
      mergeMap(([httpServerRequest, toNodeHttpResponse]) =>
        handler(of(httpServerRequest)).pipe(
          mergeMap(toNodeHttpResponse),
          tapNext(nodeHttpResponse =>
            console.log(
              `[HTTP] ${httpServerRequest.method} ${httpServerRequest.url.pathname} ${nodeHttpResponse.statusCode}`
            )
          )
        )
      )
    );

    subscriber.add(requestPipeline.subscribe());
    subscriber.add(() => server.close());

    server.listen({ host, port }, () => {
      const httpServer: HttpServer = {
        host,
        port: `${port}`,
      };

      subscriber.next(httpServer);
    });
  });
}

function parsePort(portString: string): number {
  const port = Number(portString);
  if (isNaN(port)) {
    throw new Error(`non-numeric port "${port}" not supported`);
  }

  return port;
}
