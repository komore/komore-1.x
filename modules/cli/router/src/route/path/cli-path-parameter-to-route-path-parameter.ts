import { type ReadonlyRecord } from '@komore/typescript';

import { type CliPathParameterDefinition } from '../../definition/parameter/cli-path-parameter-definition';

export function cliPathParameterToRoutePathParameter(
  parameterName: string,
  pathDefinition: CliPathParameterDefinition<unknown, boolean>
): (parameterValue: string) => ReadonlyRecord<string, unknown> {
  const { parse } = pathDefinition;
  return parameterValue => {
    const value = parse(parameterValue);
    return {
      [parameterName]: value,
    };
  };
}
