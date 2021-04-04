import { BROWSER_LANGUAGES } from '@komore/element/i18n';
import { DEFAULT_LOCALES } from './default-locales';

describe('Default locales', () => {
  it('are the same as browser languages', () => {
    expect: 'default locales to be browser languages';
    expect(DEFAULT_LOCALES).toBe(BROWSER_LANGUAGES);
  });
});
