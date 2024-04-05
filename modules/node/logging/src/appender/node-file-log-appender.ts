import { createWriteStream } from 'node:fs';

import { type EncodedLogEventRecord, type LogAppender } from '@komore/logging';
import { writeFileStream } from '@komore/node/file-system';
import { concatMap, Subject } from '@komore/reactive';

import { type NodeFileLogAppenderOptions } from './node-file-log-appender-options';

/**
 * Creates a Node file log appender
 *
 * @param appenderOptions Node file log appender options
 * @returns Node file log appender
 */
export function nodeFileLogAppender(appenderOptions: NodeFileLogAppenderOptions): LogAppender {
  const { encoder, encoding: fileEncoding, mode, path, truncate: _t = false } = appenderOptions;
  const encodedBuffer = new Subject<EncodedLogEventRecord>();
  const writeStream = createWriteStream(path, { encoding: fileEncoding, mode });

  encodedBuffer
    .asObservable()
    .pipe(concatMap(({ buffer, encoding }) => writeFileStream(writeStream, buffer, { encoding })))
    .subscribe(); // TODO: finalizer? close the stream?

  return logEventRecord => {
    const encoded = encoder(logEventRecord);
    encodedBuffer.next(encoded);
  };
}
