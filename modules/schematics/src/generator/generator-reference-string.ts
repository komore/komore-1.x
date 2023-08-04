/**
 * Generator reference string
 */
export type GeneratorReferenceString = `${string}:${string}` & {
  readonly __tag_generatorReferenceString: unique symbol;
};
