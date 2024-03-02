import { randomNumberBetween } from '../number/random-number-between';
import { type RandomStringCapitalization } from './random-string-capitalization';
import { type RandomStringCharacterSet } from './random-string-character-set';
import { type RandomStringOptions } from './random-string-options';

/**
 * Creates a function that generates a random string
 *
 * @param options Random string options
 * @returns Function that generates a random string
 */
export function randomString(options: RandomStringOptions): () => string {
  const { capitalization, characterSet = 'alphanumeric', length = 32, rng } = options;
  const characters = getCharactersForCharacterSet(characterSet, capitalization);
  const randomNumber = randomNumberBetween({
    integer: true,
    minimum: 0,
    maximum: characters.length,
    ...(rng !== undefined ? { rng } : {}),
  });
  return () => Array.from({ length }, () => characters[randomNumber()] as string).join('');
}

/**
 * Returns the list of possible characters for a given character set
 *
 * @param characterSet Character set
 * @param capitalization Capitalization
 * @returns List of possible characters
 * @private
 */
function getCharactersForCharacterSet(
  characterSet: RandomStringCharacterSet | (string & {}),
  capitalization: RandomStringCapitalization | undefined
): string {
  const allowLowerCase = capitalization === undefined || capitalization === 'lowercase';
  const allowUpperCase = capitalization === undefined || capitalization === 'uppercase';
  const alphabeticLowerCase = allowLowerCase ? 'abcdefghijklmnopqrstuvwxyz' : '';
  const alphabeticUpperCase = allowUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
  const numbers = '0123456789';

  switch (characterSet) {
    case 'alphabetic':
      return alphabeticLowerCase + alphabeticUpperCase;
    case 'alphanumeric':
      return alphabeticLowerCase + alphabeticUpperCase + numbers;
    case 'base64':
      return alphabeticLowerCase + alphabeticUpperCase + numbers + '+/';
    case 'binary':
      return '01';
    case 'hex':
      return numbers + (capitalization === 'uppercase' ? 'ABCDEF' : 'abcdef');
    case 'numeric':
      return numbers;
    case 'octal':
      return '01234567';
    default:
      return characterSet;
  }
}
