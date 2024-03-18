import { codePointToString } from './code-point-to-string';

/**
 * Creates a function that returns a ZWJ (Zero Width Joiner) sequence from a base character and a list of modifier
 * characters
 *
 * @param modifierCharacters Modifier characters
 * @returns Function that returns a ZWJ sequence from a base character and the list of modifier characters
 */
export function characterToZwjSequence(modifierCodePoints: ReadonlyArray<number>): (character: string) => string {
  const modifierCharacters = modifierCodePoints.map(codePointToString);
  return character => [character, ...modifierCharacters].join('\u200d');
}
