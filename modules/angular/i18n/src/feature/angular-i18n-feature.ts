import { type AngularI18nFeatureKinds } from './angular-i18n-feature-kinds';

/**
 * Angular i18n feature
 *
 * @template Kind Angular i18n feature kind
 * @private
 */
export interface AngularI18nFeature<Kind extends keyof AngularI18nFeatureKinds> {
  /**
   * Feature kind
   */
  readonly kind: Kind;
  /**
   * Feature value
   */
  readonly value: AngularI18nFeatureKinds[Kind];
}
