import { type AngularI18nFeature } from './angular-i18n-feature';
import { type AngularI18nFeatureKinds } from './angular-i18n-feature-kinds';

/**
 * Creates a function that tests whether an Angular i18n feature is of a certain kind
 *
 * @param kind Angular i18n feature kind
 * @returns Function that tests whether an Angular i18n feature is of a certain kind
 * @private
 */
export function angularI18nFeatureOfKind<Kind extends keyof AngularI18nFeatureKinds>(
  kind: Kind
): (i18nFeature: AngularI18nFeature<keyof AngularI18nFeatureKinds>) => i18nFeature is AngularI18nFeature<Kind> {
  return (i18nFeature): i18nFeature is AngularI18nFeature<Kind> => i18nFeature.kind === kind;
}
