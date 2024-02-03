import { type TextAiLayer } from './text-ai-layer';
import { type TextAnalysisOptions } from './text-analysis-options';

/**
 * Analyses text
 *
 * @param layer Text AI layer used to perform the analysis
 * @param options Text analysis options
 * @param text Text to analyze
 * @returns Text analysis
 */
export function textToTextAnalysis(
  layer: TextAiLayer,
  options: TextAnalysisOptions,
  text: string
): Observable<TextAnalysisResult> {}
