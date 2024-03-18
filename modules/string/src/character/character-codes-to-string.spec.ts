import { feature } from '@komore/testing';

import { characterCodesToString } from './character-codes-to-string';

feature('Character codes to string', {
  'builds a string from character codes'() {
    given: 'character codes';
    const characterCodes = [65, 66, 67];

    when: 'converting the character codes to a string';
    const str = characterCodesToString(characterCodes);

    expect: 'the string to be made of the characters represented by the character codes';
    str === 'ABC';
  },
});
