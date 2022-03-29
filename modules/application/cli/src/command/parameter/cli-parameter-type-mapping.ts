import { type Temporal } from '@js-temporal/polyfill';

/**
 * CLI parameter type mapping
 */
export interface CliParameterTypeMapping {
  boolean: boolean;
  date: Temporal.PlainDateTime;
  'date-time': Temporal.PlainDate;
  number: number;
  string: string;
  time: Temporal.PlainTime;
}
