import { createDirective } from '@komore/element/directive';

/**
 * For directive
 */
export const kFor = createDirective<HTMLElement>((element$, condition$) => combineLatest({
  element: element$,
  condition: condition$.pipe()
}).subscribe({ element, condition }) => {
  const present = !!condition;

  if (present) {
    subscrelement$.pipe(

));
