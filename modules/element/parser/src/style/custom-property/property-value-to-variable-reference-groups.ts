import { type VariableReferenceGroup } from './variable-reference-group';

/**
 * Parses variable reference groups
 * @param propertyValue Property value
 * @returns List of variable reference groups
 */
export function propertyValueToVariableReferenceGroups(propertyValue: string): ReadonlyArray<VariableReferenceGroup> {
  const characters = propertyValue.split('');
  const walker: PropertyValueWalker = {
    stack: [],
    groups: []
  };
  return characters.reduce(charactersToVariableReferences, walker).groups;
}

/**
 * Reduces characters to variable references
 * @param walker Property value walker
 * @param character Character
 * @param index Character index
 * @param characters List of all characters
 * @returns Input property value walker
 */
function charactersToVariableReferences(
  walker: PropertyValueWalker,
  character: string,
  index: number,
  characters: ReadonlyArray<string>
): PropertyValueWalker {
  if (character === OPENING_MATCH) {
    walker.stack.push(index);
  } else if (character === CLOSING_MATCH) {
    const openingIndex = walker.stack.pop();
    if (openingIndex === undefined) {
      throw new Error(`unbalanced property value ${characters.join()}`);
    }

    if (isVariableReference(openingIndex, characters)) {
      walker.groups.push({
        openingIndex,
        closingIndex: index
      });
    }
  }

  return walker;
}

/**
 * Tests whether an opening parenthesis belong to a variable reference
 * @param openingIndex Opening index
 * @param characters List of all characters
 * @returns true if the opening index is the parenthesis in a valid `var(` segment
 */
function isVariableReference(openingIndex: number, characters: ReadonlyArray<string>): boolean {
  if (openingIndex < OPENING_MATCH_REFERENCE_PREFIX.length) {
    return false;
  }

  if (!(openingIndex < OPENING_MATCH_REFERENCE_PREFIX.length + 1)) {
    const previousCharacter = characters[openingIndex - OPENING_MATCH_REFERENCE_PREFIX.length - 1];
    if (!VALID_PREVIOUS_CHARACTERS.test(previousCharacter)) {
      return false;
    }
  }

  const prefixCharacters = characters.slice(openingIndex - OPENING_MATCH_REFERENCE_PREFIX.length, openingIndex).join('');
  return prefixCharacters === OPENING_MATCH_REFERENCE_PREFIX;
}

const OPENING_MATCH = '(';
const CLOSING_MATCH = ')';
const OPENING_MATCH_REFERENCE_PREFIX = 'var';
const VALID_PREVIOUS_CHARACTERS = /[\s(,:+-\\*/]+/;

interface PropertyValueWalker {
  readonly stack: Array<number>;
  readonly groups: Array<VariableReferenceGroup>;
}
