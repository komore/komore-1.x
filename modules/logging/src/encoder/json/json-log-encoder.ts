import { asDateTimeString } from '@komore/temporal';

import { type LogEncoder } from '../log-encoder';
import { type JsonEncodedLogEventRecord } from './json-encoded-log-event-record';
import { type JsonLogEncoderOptions } from './json-log-encoder-options';

/**
 * Creates a JSON log encoder
 *
 * Each log event record is written its own individual JSON object, building a newline-delimited JSON (NDJSON) stream.
 *
 * @param encoderOptions JSON log encoder options
 * @returns JSON log encoder
 * @see {@link http://ndjson.org/ NDJSON}
 */
export function jsonLogEncoder(_encoderOptions: JsonLogEncoderOptions): LogEncoder {
  const textEncoder = new TextEncoder();
  return logEventRecord => {
    const { context, event, executionContext = {}, message } = logEventRecord;
    const { domain, name, severity } = event;
    const timestamp = asDateTimeString(logEventRecord.timestamp);
    const jsonEncoded: JsonEncodedLogEventRecord = {
      context,
      domain,
      executionContext,
      message,
      name,
      severity,
      timestamp,
    };
    const json = JSON.stringify(jsonEncoded) + '\n';
    const buffer = textEncoder.encode(json);
    return {
      buffer,
      encoding: 'utf-8',
    };
  };
}
