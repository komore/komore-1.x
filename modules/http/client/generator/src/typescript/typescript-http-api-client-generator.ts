import { type HttpApi } from '@komore/http/api';

/**
 * TypeScript HTTP API client generator
 */
export interface TypeScriptHttpApiClientGenerator {
  (httpApi: HttpApi): Observable<unknown>;
}
