import { type ReadonlyRecord } from '@komore/typescript';

/**
 * API Gateway HTTP API event authorizer
 */
export interface ApiGatewayHttpApiEventAuthorizer {
  readonly jwt: {
    readonly claims: ReadonlyRecord<string, string | number | boolean | ReadonlyArray<string>>;
    readonly scopes: ReadonlyArray<string>;
  };
}
