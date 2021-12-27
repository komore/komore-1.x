import { isNotNull } from '@komore/functional';
import { deferPromise, type Observable, throwUnless } from '@komore/reactive';
import { type GPUAdapterRequestOptions } from './gpu-adapter-request-options';
import { NoGPUAdapterFoundError } from './no-gpu-adapter-found-error';

/**
 * Requests a GPU adapter
 * @param options GPU adapter request options
 * @returns GPU adapter
 */
export function requestGPUAdapter(options?: Partial<GPUAdapterRequestOptions>): Observable<GPUAdapter> {
  const gpu = options?.navigator?.gpu ?? navigator.gpu;
  return deferPromise(() => gpu.requestAdapter(options)).pipe(
    throwUnless(isNotNull, () => new NoGPUAdapterFoundError('no GPU adapter found'))
  );
}
