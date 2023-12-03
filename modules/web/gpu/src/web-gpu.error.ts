import { createErrorType, errorProperties } from '@komore/error';
import { webGpuDomain } from './web-gpu.domain';

/**
 * WebGPU error
 */
export const webGpuError = createErrorType(webGpuDomain, {
  /**
   * No GPU adapter was found
   */
  noGpuAdapterFound: errorProperties(),
});
