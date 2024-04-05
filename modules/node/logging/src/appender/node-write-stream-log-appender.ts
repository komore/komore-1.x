import { WriteStream } from 'node:fs';

import { type EncodedLogEventRecord, type LogAppender } from '@komore/logging';

import { type NodeWriteStreamLogAppenderOptions } from './node-write-stream-log-appender-options';

/**
 * Creates a Node console log appender
 *
 * @param appenderOptions Node console log appender options
 * @returns Node console log appender
 */
export function nodeWriteStreamLogAppender(appenderOptions: NodeWriteStreamLogAppenderOptions): LogAppender {
  const { encoder, writeStream } = appenderOptions;
  const write: (encoded: EncodedLogEventRecord) => void =
    writeStream instanceof WriteStream
      ? ({ buffer, encoding }) => writeStream.write(buffer, encoding)
      : ({ buffer, encoding }) => writeStream.write(buffer, encoding);
  return logEventRecord => {
    const encodedLogEventRecord = encoder(logEventRecord);
    write(encodedLogEventRecord);
  };
}
