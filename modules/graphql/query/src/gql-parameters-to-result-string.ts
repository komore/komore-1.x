import { isGraphQLAstNode } from '@komore/graphql/ast';

/**
 * TODO
 *
 * @param literals
 * @returns
 * @private
 */
export function gqlParametersToResultString(
  literals: ReadonlyArray<string>
): (acc: string, parameter: unknown, index: number) => string {
  return (acc, parameter, index) => {
    const str =
      isGraphQLAstNode(parameter) && parameter.kind === 'Document' ? parameter.location.source.content : parameter;
    return acc + str + literals[index + 1];
  };
}
