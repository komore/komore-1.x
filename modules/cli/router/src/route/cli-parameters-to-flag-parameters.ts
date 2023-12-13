import { isCliFlagParameter } from './is-cli-flag-parameters';

export function cliParametersToFlagParameters(
  acc: Record<string, string>,
  parameter: string,
  index: number,
  parameters: ReadonlyArray<string>
): Record<string, string> {
  console.log('aha!', acc, parameter, index);
  if (!isCliFlagParameter(parameter)) {
    return acc;
  }

  const parameterName = parameter.substring(2);
  const nextParameter = parameters[index + 1];
  const parameterValue = nextParameter !== undefined && !isCliFlagParameter(nextParameter) ? nextParameter : undefined;
  return {
    ...acc,
    [parameterName]: parameterValue ?? '',
  };
}
