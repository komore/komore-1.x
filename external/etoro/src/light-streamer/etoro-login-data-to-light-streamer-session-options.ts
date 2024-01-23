import { type HttpClient } from '@komore/http/client';

import { type EToroLoginData } from '../login/etoro-login-data';
import { type EToroLightStreamerSessionOptions } from './etoro-light-streamer-session-options';

/**
 * Creates a function that returns eToro LightStreamer session options, given eToro login data
 *
 * @param httpClient HTTP client
 * @param token Token
 * @returns Function that returns eToro LightStreamer session options, given eToro login data
 */
export function eToroLoginDataToLightStreamerSessionOptions(
  httpClient: HttpClient,
  token: string
): (loginData: EToroLoginData) => EToroLightStreamerSessionOptions {
  return loginData => {
    const {
      AggregatedResult: { ResponseSummary: responseSummary },
      Configuration: {
        Push: { RealUrl: endpointUrlString },
      },
    } = loginData;
    const { AccountType: accountType, ApplicationName: name, ApplicationVersion: version } = responseSummary;
    const endpointUrl = new URL(endpointUrlString);

    return {
      accountType,
      application: {
        identifier: name,
        name,
        version,
      },
      endpointUrl,
      httpClient,
      token,
    };
  };
}
