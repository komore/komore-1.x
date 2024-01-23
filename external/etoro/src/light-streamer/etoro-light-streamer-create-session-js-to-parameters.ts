import { type EToroLightStreamerSessionId } from './etoro-light-streamer-session-id';
import { type EToroLightStreamerSessionParameters } from './etoro-light-streamer-session-parameters';

/**
 * Returns eToro LightStreamer session parameters, given a create_session.js file's content
 *
 * @param createSessionJs create_session.js file content
 * @returns eToro LightStreamer session parameters
 */
export function eToroLightStreamerCreateSessionJsToParameters(
  createSessionJs: string
): EToroLightStreamerSessionParameters {
  const matches = createSessionJs.match(/start\('([^']+)', [^,]+, (\d+), (\d+), '([^']+)', '([^']+)'\);/) as
    | readonly [
        matches: string,
        sessionIdString: string,
        keepAliveString: string,
        requestLimitString: string,
        serverName: string,
        ipAddress: string,
      ]
    | null;
  if (matches === null) {
    throw new Error(`unhandled LightStreamer create_session.js content`);
  }

  const [_matches, sessionIdString, keepAliveString, requestLimitString, serverName, ipAddress] = matches;
  const keepAlive = Number(keepAliveString);
  const requestLimit = Number(requestLimitString);
  const sessionId = sessionIdString as unknown as EToroLightStreamerSessionId;

  return {
    ipAddress,
    keepAlive,
    requestLimit,
    serverName,
    sessionId,
  };
}
