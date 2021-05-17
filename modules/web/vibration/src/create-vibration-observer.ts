import type { Observer } from '@komore/reactive';
import type { VibrationObserverOptions } from './vibration-observer-options';

/**
 * Creates a vibration observer
 * @returns Vibration observer
 * @note Vibrations are ignored when the API is not available
 */
export function createVibrationObserver(
  options?: Partial<VibrationObserverOptions>
): Observer<number | ReadonlyArray<number>> {
  const stopOnCompletion = stopOnCompletionOptions.includes(options?.stopOn);
  const stopOnError = stopOnErrorOptions.includes(options?.stopOn);

  function next(value: number | ReadonlyArray<number>): void {
    navigator.vibrate?.(value as number | Array<number>);
  }

  function error(): void {
    if (stopOnError) {
      navigator.vibrate?.(0);
    }
  }

  function complete(): void {
    if (stopOnCompletion) {
      navigator.vibrate?.(0);
    }
  }

  return {
    next,
    error,
    complete
  };
}

type StopOnOption = VibrationObserverOptions['stopOn'];
const stopOnCompletionOptions: ReadonlyArray<StopOnOption> = ['complete', 'complete-and-error'];
const stopOnErrorOptions: ReadonlyArray<StopOnOption> = ['complete-and-error', 'error', undefined];
