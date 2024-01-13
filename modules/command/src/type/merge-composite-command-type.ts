import { type ReadonlyRecord } from '@komore/typescript';
import { entriesToObject, objectToEntries } from '@komore/functional';

import { type GenericCommandType } from './generic-command-type';

/**
 * Merges a composite command type into a command type
 *
 * ```ts
 * const compositeCommandType = {
 *   commandsX: createCommandType(),
 *   commandsY: createCommandType()
 * };
 * const commandType = mergeCompositeCommandType(compositeCommandType);
 * ```
 *
 * @param compositeCommandType Composite command type
 * @returns Command type
 */
export function mergeCompositeCommandType<CommandType extends GenericCommandType>(
  compositeCommandType: ReadonlyRecord<string, CommandType>
): CommandType {
  const compositeCommandTypeEntries = objectToEntries(compositeCommandType);
  const commandTypeEntries = compositeCommandTypeEntries.flatMap(([, commandType]) => objectToEntries(commandType));
  return entriesToObject(commandTypeEntries) as CommandType;
}
