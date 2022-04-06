import { type ReadonlyRecord } from '@komore/typescript';
import { Fn } from 'cdktf';

/**
 * Renders a template file
 *
 * @param path File path
 * @param variables Variables
 * @returns Template file rendered as a string
 */
export function templateFile(path: string, variables: ReadonlyRecord<string, unknown>): string {
  return Fn.templatefile(path, variables);
}
