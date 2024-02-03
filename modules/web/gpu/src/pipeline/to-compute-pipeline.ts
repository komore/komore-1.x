import { deferPromise } from '@komore/reactive';

/**
 * Returns a function that creates a GPU compute pipeline asynchronously
 *
 * @param descriptor GPU compute pipeline descriptor
 * @returns GPU compute pipeline
 */
export function toComputePipeline(
  descriptor: GPUComputePipelineDescriptor
): (gpuDevice: GPUDevice) => Observable<GPUComputePipeline> {
  return gpuDevice => deferPromise(() => gpuDevice.createComputePipelineAsync(descriptor));
}
