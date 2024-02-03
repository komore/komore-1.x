import { isNotNull } from '@komore/functional';
import { deferPromise, throwUnless } from '@komore/reactive';

import { webGpuError } from '../web-gpu.error';
import { type GPUAdapterRequestOptions } from './gpu-adapter-request-options';

/**
 * Requests a GPU adapter
 *
 * @param options GPU adapter request options
 * @returns GPU adapter
 */
export function requestGPUAdapter(options?: Partial<GPUAdapterRequestOptions>): Observable<GPUAdapter> {
  const gpu = options?.navigator?.gpu ?? navigator.gpu;
  return deferPromise(() => gpu.requestAdapter(options)).pipe(
    throwUnless(isNotNull, () => webGpuError.noGpuAdapterFound())
  );
}
