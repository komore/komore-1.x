import { type Temporal } from '@komore/temporal';

import { type CliParameterTypeName } from './cli-parameter-type-name';
import { type CliParameterValueTypeName } from './cli-parameter-value-type-name';

/**
 * CLI parameter value type name mapping
 */
export type CliParameterTypeNameMapping<TypeName extends CliParameterTypeName> =
  TypeName extends `array<${infer ValueTypeName}>`
    ? ValueTypeName extends CliParameterValueTypeName
      ? ReadonlyArray<CliParameterValueTypeNameMapping[ValueTypeName]>
      : never
    : TypeName extends `set<${infer ValueTypeName}>`
    ? ValueTypeName extends CliParameterValueTypeName
      ? ReadonlySet<CliParameterValueTypeNameMapping[ValueTypeName]>
      : never
    : TypeName extends CliParameterValueTypeName
    ? CliParameterValueTypeNameMapping[TypeName]
    : never;

/**
 * CLI parameter value type name mapping
 */
export interface CliParameterValueTypeNameMapping {
  boolean: boolean;
  date: Temporal.PlainDate;
  'date-time': Temporal.PlainDateTime;
  number: number;
  regexp: RegExp;
  string: string;
  time: Temporal.PlainTime;
}
