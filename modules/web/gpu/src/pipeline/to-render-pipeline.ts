import { deferPromise } from '@komore/reactive';

/**
 * Returns a function that creates a GPU render pipeline asynchronously
 *
 * @param descriptor GPU render pipeline descriptor
 * @returns GPU render pipeline
 */
export function toRenderPipeline(
  descriptor: GPURenderPipelineDescriptor
): (gpuDevice: GPUDevice) => Observable<GPURenderPipeline> {
  return gpuDevice => deferPromise(() => gpuDevice.createRenderPipelineAsync(descriptor));
}
