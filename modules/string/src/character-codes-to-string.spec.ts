import { characterCodesToString } from './character-codes-to-string';

describe('Character codes to string', () => {
  it('can build a string from character codes', () => {
    given: 'character codes';
    const characterCodes = [65, 66, 67];
    when: 'converting the character codes to a string';
    const str = characterCodesToString(characterCodes);
    expect: 'the string to be made of the characters represented by the character codes';
    expect(str).toBe('ABC');
  });
});
