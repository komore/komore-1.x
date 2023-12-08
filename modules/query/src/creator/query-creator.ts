import { type TypeCreator } from '@komore/typescript';

/**
 * Query creator
 *
 * @template QueryName Query name
 * @template TypeCreatorType Type creator type
 * @private
 */
export type QueryCreator<QueryName extends string, TypeCreatorType extends TypeCreator<any, any>> = {
  /**
   * Query name
   */
  readonly name: QueryName;
} & TypeCreatorType;
