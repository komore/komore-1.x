import { type TextAiLayer } from '../text-ai-layer';
import { type TextAnalysisOptions } from './text-analysis-options';

/**
 * Text to text analysis
 *
 * @param layer Text AI layer
 * @param options Text analysis options
 * @returns Text analysis
 */
export function textToTextAnalysis(
  layer: TextAiLayer,
  options: TextAnalysisOptions
): (text: string) => Observable<TextAnalysisResult> {
  return text => {};
}
