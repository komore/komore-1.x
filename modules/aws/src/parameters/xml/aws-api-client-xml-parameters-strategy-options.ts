import { type XmlParser } from '@komore/xml';

/**
 * AWS API client XML parameters strategy options
 */
export interface AwsApiClientXmlParametersStrategyOptions {
  /**
   * XML parser
   */
  readonly xmlParser: XmlParser;
}
