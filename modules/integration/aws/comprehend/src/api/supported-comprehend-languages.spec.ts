import { LanguageCode } from '@aws-sdk/client-comprehend';
import { enumToValues } from '@komore/functional';
import { supportedComprehendLanguages } from './supported-comprehend-languages';

describe('Supported Comprehend languages', () => {
  it('contains all language codes supported by AWS Comprehend', () => {
    given: 'the list of supported AWS Comprehend languages';
    const enumValues = enumToValues(LanguageCode);

    expect: 'the defined list of supported language to exactly match';
    expect(supportedComprehendLanguages).toStrictEqual(enumValues);
  });
});
