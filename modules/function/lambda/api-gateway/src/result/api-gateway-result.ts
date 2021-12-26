import { type ReadonlyRecord } from '@komore/typescript';

/**
 * API gateway response
 */
export interface ApiGatewayResult {
  readonly body?: string;
  readonly headers?: ReadonlyRecord<string, boolean | number | string>;
  readonly isBase64Encoded?: boolean;
  readonly multiValueHeaders?: ReadonlyRecord<string, ReadonlyArray<boolean | number | string>>;
  readonly statusCode: number;
}
