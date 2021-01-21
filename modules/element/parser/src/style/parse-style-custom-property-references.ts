/**
 * Parses custom property references from a style property value
 * @param propertyValue Property value
 * @returns List of property definitions
 */
export function parseStyleCustomPropertyReferences(propertyValue: string): ReadonlyArray<PropertyDefinition> {
  return parseVariableReferenceGroups(propertyValue)
    .map(({ openingIndex, closingIndex }) => propertyValue.substring(openingIndex + 1, closingIndex))
    .map(parseCustomPropertyReference);
}

const regExp = /^\s*(--[^\s,)]+)\s*((?:,\s*)(.*))?$/;

/**
 * Parses a custom property reference
 * @param customPropertyReference Custom property reference
 * @returns Custom property definition
 */
function parseCustomPropertyReference(customPropertyReference: string): PropertyDefinition {
  const matches = customPropertyReference.match(regExp);
  if (matches === null) {
    throw new Error(`invalid custom property reference var(${customPropertyReference})`);
  }

  const name = matches[1].trim();
  const initialValue = matches[3]?.trim();

  return {
    name,
    inherits: true,
    initialValue
  };
}

/**
 * Parses variable reference groups
 * @param propertyValue Property value
 * @returns List of variable reference groups
 */
function parseVariableReferenceGroups(propertyValue: string): ReadonlyArray<VariableReferenceGroup> {
  const characters = propertyValue.split('');
  const walker: PropertyValueWalker = {
    stack: [],
    groups: []
  };
  return characters.reduce(reduceCharactersToVariableReferences, walker).groups;
}

/**
 * Reduces characters to variable references
 * @param walker Property value walker
 * @param character Character
 * @param index Character index
 * @param characters List of all characters
 * @returns Input property value walker
 */
function reduceCharactersToVariableReferences(
  walker: PropertyValueWalker,
  character: string,
  index: number,
  characters: ReadonlyArray<string>
): PropertyValueWalker {
  if (character === openingMatch) {
    walker.stack.push(index);
  } else if (character === closingMatch) {
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
  if (openingIndex < openingMatchReferencePrefix.length) {
    return false;
  }

  if (!(openingIndex < openingMatchReferencePrefix.length + 1)) {
    const previousCharacter = characters[openingIndex - openingMatchReferencePrefix.length - 1];
    if (!validPreviousCharacters.test(previousCharacter)) {
      return false;
    }
  }

  const prefixCharacters = characters.slice(openingIndex - openingMatchReferencePrefix.length, openingIndex).join('');
  return prefixCharacters === openingMatchReferencePrefix;
}

const openingMatch = '(';
const closingMatch = ')';
const openingMatchReferencePrefix = 'var';
const validPreviousCharacters = /[\s(,:+-\\*/]+/; //+-*/
/*const matchStart = 'var(';
const matchEnd = ')';
const matchDefault = ',';*/

interface VariableReferenceGroup {
  readonly openingIndex: number;
  readonly closingIndex: number;
}

interface PropertyValueWalker {
  readonly stack: Array<number>;
  readonly groups: Array<VariableReferenceGroup>;
}

// TODO: remove once https://github.com/microsoft/TypeScript/issues/38593 is fixed
declare global {
  export interface PropertyDefinition {
    name: string;
    syntax?: string;
    inherits: boolean;
    initialValue?: string;
  }
}
