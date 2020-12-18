import { Server } from 'http';
import * as Koa from 'koa';
import { ListenOptions } from 'net';
import { Observable, Observer, of, Subject } from 'rxjs';
import { catchError, defaultIfEmpty, map, mergeMap } from 'rxjs/operators';
import { HttpEndpointParameters } from './endpoint/http-endpoint-parameters';
import { HttpContext } from './http-context';

/**
 * Internal HTTP context
 */
type InternalHttpContext = Readonly<{
  context: HttpContext<HttpEndpointParameters<{}, {}, {}, {}>>;
  reject: (error?: any) => void;
  resolve: (value: Koa.Context) => void;
}>;

/**
 * Internal HTTP context value
 */
type InternalHttpContextValue = InternalHttpContext &
  Readonly<{
    index: number;
    result?: any;
    error?: any;
  }>;

/**
 * HTTP request observer
 */
class HttpRequestObserver implements Observer<InternalHttpContextValue> {
  /**
   * Handler that receives the next emitted value
   * @param httpRequestValue HTTP request value
   */
  next({ context, resolve, reject, result, error, index }: InternalHttpContextValue): void {
    if (index > 0) {
      const { method, path } = context._context;
      console.warn(`HTTP request ${method} ${path} pipe emission #${index + 1} ignored`, result, error);
      return;
    }

    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  }

  /**
   * Handler that receives a thrown error
   * @param error Error
   */
  error(error: any): void {
    console.error(`HTTP server threw an error: no further requests will be handled`, error);
  }

  /**
   * Handles that gets triggered upon completion
   */
  complete(): void {
    console.error(`HTTP server completed: no further invocations will be handled`);
  }
}

/**
 * Creates an HTTP server
 * @param project Projection function
 * @param listenOption Listening options
 * @returns Server
 */
export function createHttpServer(
  project: (
    httpContext$: Observable<HttpContext<HttpEndpointParameters<{}, {}, {}, {}>>>
  ) => Observable<HttpContext<any>>,
  listenOptions?: ListenOptions
): Server {
  const application = new Koa();
  const subject = new Subject<InternalHttpContext>();
  const subscription = subject
    .asObservable()
    .pipe(
      mergeMap(httpRequestContext =>
        project(of(httpRequestContext.context)).pipe(
          map(result => ({ result, error: undefined })),
          catchError(error => of({ result: undefined, error })),
          map((result, index) => ({
            ...httpRequestContext,
            ...result,
            index
          })),
          defaultIfEmpty({
            ...httpRequestContext,
            index: 0
          })
        )
      )
    )
    .subscribe(new HttpRequestObserver());

  return application
    .use(koaContext => {
      return new Promise<Koa.Context>((resolve, reject) => {
        if (subscription.closed) {
          console.error(
            `HTTP request ${koaContext.method} ${koaContext.path} completed: invocation ignored`,
            koaContext
          );
          reject();
          return;
        }

        const url = new URL(koaContext.url);
        const context: HttpContext<HttpEndpointParameters<{}, {}, {}, {}>> = {
          _context: koaContext,
          method: koaContext.method,
          url,
          unprocessedPath: url.pathname,
          endpointParameters: { header: {}, path: {}, payload: {}, query: {} }
        };

        subject.next({
          context,
          reject,
          resolve
        });
      });
    })
    .listen(listenOptions, () => console.log('HTTP server ready'));
}
