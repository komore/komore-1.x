import { type HttpApi } from '@komore/http/api';
import { stringToCapitalizedString } from '@komore/string';

/**
 * Returns a TypeScript API client base identifier, given an HTTP API
 *
 * @param httpApi HTTP API
 * @returns TypeScript API client base identifier
 */
export function httpApiToTypeScriptApiClientBaseIdentifier(httpApi: HttpApi): string {
  /*
  TODO:
  - SOME => Some
  - SomeAPI => SomeApi
  - Some API => SomeApi
   */
  return stringToCapitalizedString()(httpApi.description.title);
}
