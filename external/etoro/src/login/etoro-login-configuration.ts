import { type UrlString } from '@komore/url';

/**
 * eToro login configuration
 */
export interface EToroLoginConfiguration {
  readonly Intercom: {
    readonly UserToken: string;
  };
  readonly Push: {
    readonly DemoUrl: UrlString;
    readonly RealUrl: UrlString;
  };
}
