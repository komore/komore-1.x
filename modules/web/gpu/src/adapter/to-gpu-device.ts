import { deferPromise } from '@komore/reactive';

/**
 * Returns a function that requests a GPU device from a GPU adapter
 *
 * @param description GPU device descriptor
 * @returns GPU device
 */
export function toGPUDevice(descriptor?: GPUDeviceDescriptor): (adapter: GPUAdapter) => Observable<GPUDevice> {
  return adapter => deferPromise(() => adapter.requestDevice(descriptor));
}
