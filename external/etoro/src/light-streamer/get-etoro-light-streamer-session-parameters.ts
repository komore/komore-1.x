import { createContentTypeHttpHeader } from '@komore/http';
import { httpClientResponseToText } from '@komore/http/client';
import { map, mergeMap, type Observable } from '@komore/reactive';

import { type EToroLightStreamerSessionOptions } from './etoro-light-streamer-session-options';
import { type EToroLightStreamerSessionParameters } from './etoro-light-streamer-session-parameters';
import { type EToroLightStreamerSessionPassword } from './etoro-light-streamer-session-password';
import { eToroLightStreamerCreateSessionJsToParameters } from './etoro-light-streamer-create-session-js-to-parameters';

export function getEToroLightStreamerSessionParameters(
  sessionOptions: EToroLightStreamerSessionOptions
): Observable<EToroLightStreamerSessionParameters> {
  const { accountType, application, endpointUrl, httpClient, token } = sessionOptions;
  const url = new URL('/lightstreamer/create_session.js', endpointUrl);
  const password: EToroLightStreamerSessionPassword = {
    AccountType: accountType,
    ApplicationIdentifier: application.identifier,
    ApplicationName: application.name,
    ApplicationVersion: application.version,
    UserAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  };
  const headers = [createContentTypeHttpHeader('application/x-www-form-urlencoded')] as const;
  const body = new URLSearchParams({
    LS_op2: 'create',
    LS_phase: '3801',
    LS_cause: 'new.api',
    LS_polling: 'true',
    LS_polling_millis: '0',
    LS_idle_millis: '0',
    LS_cid: 'tqGko0tg4pkpW3CAK3T4hwLri8LBO7d',
    LS_adapter_set: 'PROXY_PUSH',
    LS_user: token,
    LS_password: JSON.stringify(password),
    LS_container: 'lsc',
  }).toString();

  return httpClient({ headers, method: 'POST', url, options: { body } }).pipe(
    mergeMap(httpClientResponseToText()),
    map(eToroLightStreamerCreateSessionJsToParameters)
  );
}
