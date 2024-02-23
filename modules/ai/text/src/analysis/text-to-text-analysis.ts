import { of } from '@komore/reactive';

import { type TextAiLayer } from '../text-ai-layer';
import { type TextAnalysisOptions } from './text-analysis-options';
import { type TextAnalysisResult } from './text-analysis-result';

/**
 * Text to text analysis
 *
 * @param layer Text AI layer
 * @param options Text analysis options
 * @returns Text analysis
 */
export function textToTextAnalysis(
  _layer: TextAiLayer,
  _options: TextAnalysisOptions
): (text: string) => Observable<TextAnalysisResult> {
  return _text => of(void 0 as unknown as TextAnalysisResult);
}
