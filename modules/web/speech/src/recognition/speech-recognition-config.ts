/**
 * Speech recognition configuration
 */
export type SpeechRecognitionConfig = Readonly<
  Partial<Pick<SpeechRecognition, 'continuous' | 'grammars' | 'interimResults' | 'lang' | 'maxAlternatives'>>
>;
