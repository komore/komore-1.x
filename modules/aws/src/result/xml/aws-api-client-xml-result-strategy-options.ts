import { type XmlParser } from '@komore/xml';

/**
 * AWS API client XML result strategy options
 */
export interface AwsApiClientXmlResultStrategyOptions {
  /**
   * XML parser
   */
  readonly xmlParser: XmlParser;
}
