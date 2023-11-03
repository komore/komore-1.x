import { makeEnvironmentProviders, type EnvironmentProviders } from '@angular/core';

import { type Translator } from '@komore/i18n';

import { AngularTranslator } from './angular-translator';
import { angularTranslatorToken } from './angular-translator-token';
import { type AngularI18nFeature } from './feature/angular-i18n-feature';
import { type AngularI18nFeatureKinds } from './feature/angular-i18n-feature-kinds';

/**
 * Provides Angular with i18n support
 *
 * @param translator Translator
 * @param i18nFeatures Angular i18n features
 * @returns Environment providers
 */
export function provideAngularI18n(
  translator: Translator,
  ..._i18nFeatures: ReadonlyArray<AngularI18nFeature<keyof AngularI18nFeatureKinds>>
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: angularTranslatorToken,
      useValue: translator,
    },
    AngularTranslator,
  ]);
}
