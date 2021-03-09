import type { Log, Logging } from '@google-cloud/logging';
import { deferPromise } from '@komore/reactive/promise';

/**
 * Writes a log entry
 * @param cloudLoggingClient Cloud Logging client
 * @param logName Log name
 * @param entryParameters Entry parameters
 */
export function writeLogEntry(
  cloudLoggingClient: Logging,
  logName: string,
  ...entryParameters: Parameters<Log['entry']>
) {
  return deferPromise(() => {
    const log = cloudLoggingClient.log(logName);
    const entry = log.entry(...entryParameters);
    return log.write(entry);
  });
}

/*
const metadata: LogEntry = {
  //logName?: (string|null);
  //resource?: {
  // type?: (string|null);
  //labels?: ({ [k: string]: string }|null);
  //}
  //protoPayload?: (google.protobuf.IAny|null);
  //textPayload?: (string|null);
  //jsonPayload?: (google.protobuf.IStruct|null);
  //timestamp?: (google.protobuf.ITimestamp|null);
  //receiveTimestamp?: (google.protobuf.ITimestamp|null);
  //severity?: (google.logging.type.LogSeverity|keyof typeof google.logging.type.LogSeverity|null);
  //insertId?: (string|null);
  //httpRequest?: (google.logging.type.IHttpRequest|null);
  //labels?: ({ [k: string]: string }|null);
  //operation?: {
  //id?: (string|null);
  //producer?: (string|null);
  //first?: (boolean|null);
  //last?: (boolean|null);
  //},
  // trace?: (string|null);
  // spanId?: (string|null);
  // traceSampled?: (boolean|null);
  //sourceLocation?: {
  //file?: (string|null);
  //line?: (number|Long|string|null);
  //"function"?: (string|null);
  //}
  //timestamp?: Timestamp | null;
  //severity?: LogSeverity | null;
};*/
