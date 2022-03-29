import { type Observable } from '@komore/reactive';
import { type Options, type Result } from 'sass';
import { renderSass } from './render-sass';

/**
 * Creates a function that renders SCSS content
 * @param options Options
 * @returns Function that renders SCSS content
 */
export function toProcessedScss(options: Omit<Options, 'data'>): (content: string) => Observable<Result> {
  return content => renderSass({ ...options, data: content });
}
