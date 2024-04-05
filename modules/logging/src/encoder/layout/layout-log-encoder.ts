import { type LogEncoder } from '../log-encoder';

import { type LayoutLogEncoderOptions } from './layout-log-encoder-options';

/**
 * Creates a layout log encoder
 *
 * @param encoderOptions Layout log encoder options
 * @returns Layout log encoder
 */
export function layoutLogEncoder(encoderOptions: LayoutLogEncoderOptions): LogEncoder {
  const { layout } = encoderOptions;
  const textEncoder = new TextEncoder();
  return logEventRecord => {
    const result = layout(logEventRecord);
    const buffer = textEncoder.encode(result);
    return {
      buffer,
      encoding: 'utf-8',
    };
  };
}
