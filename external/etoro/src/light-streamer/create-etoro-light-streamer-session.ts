import { map, of, type Observable } from '@komore/reactive';

import { type EToroLightStreamerSession } from './etoro-light-streamer-session';
import { type EToroLightStreamerSessionOptions } from './etoro-light-streamer-session-options';
import { getEToroLightStreamerSessionParameters } from './get-etoro-light-streamer-session-parameters';

/**
 * Creates an eToro LightStreamer session
 *
 * @param sessionOptions eToro LightStreamer session options
 * @returns eToro LightStreamer session
 */
export function createEToroLightStreamerSession(
  sessionOptions: EToroLightStreamerSessionOptions
): Observable<EToroLightStreamerSession> {
  return getEToroLightStreamerSessionParameters(sessionOptions).pipe(
    map(parameters => {
      console.log('params', parameters);
      return {
        events: of(void 0),
      };
    })
  );
}
