import { type HttpStatus } from '@komore/http';

/**
 * HTTP client response status is options
 */
export type HttpClientResponseStatusIsOptions =
  | {
      readonly minimum: number;
      readonly maximum?: number;
    }
  | {
      readonly oneOf: ReadonlyArray<HttpStatus>;
    };
