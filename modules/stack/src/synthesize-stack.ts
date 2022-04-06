import { first, type Observable } from '@komore/reactive';
import { type Stack } from './stack';
import { type StackSynthesisOptions } from './stack-synthesis-options';

/**
 * Synthesizes a stack
 *
 * @param stackProjection Stack projection function, as returned by {@link defineStack}.
 * @param synthesisOptions Stack synthesis options
 */
export function synthesizeStack(
  stackProjection: (options: Omit<StackSynthesisOptions, 'watch'>) => Observable<Stack>,
  synthesisOptions: StackSynthesisOptions
): void {
  const { watch, ...options } = synthesisOptions;
  const synthesizedStack$ = stackProjection(options);
  const $ = watch ? synthesizedStack$ : synthesizedStack$.pipe(first());
  $.subscribe(stack => stack.app.synth());
}
