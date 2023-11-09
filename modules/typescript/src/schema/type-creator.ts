/**
 * Type creator
 */
export type TypeCreator<Parameters, CreatedType> = Parameters extends void
  ? () => CreatedType
  : (parameters: Parameters) => CreatedType;
