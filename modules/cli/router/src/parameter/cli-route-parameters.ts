import { type ReadonlyRecord } from '@komore/typescript';

export interface CliRouteParameters<Parameters extends ReadonlyRecord<string, unknown>> {
  readonly commandLine: ReadonlyArray<string>;
  readonly parameters: Parameters;
}
