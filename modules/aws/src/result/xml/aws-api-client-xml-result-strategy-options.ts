import { type XmlParser } from '@komore/xml';

/**
 * AWS API client XML result strategy options
 */
export interface AwsApiClientXmlResultStrategyOptions {
  /**
   * Expected XML namespace
   */
  readonly expectedXmlNamespace?: URL;
  /**
   * XML parser
   */
  readonly xmlParser: XmlParser;
}
