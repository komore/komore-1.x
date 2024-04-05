import { type AwsApiServiceClientOptions } from '@komore/aws';
import { type XmlParser } from '@komore/xml';

/**
 * Security Token Service API client options
 */
export interface StsApiClientOptions extends AwsApiServiceClientOptions {
  /**
   * XML parser
   */
  readonly xmlParser: XmlParser;
}
