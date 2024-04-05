import { type AwsApiServiceClientOptions } from '@komore/aws';
import { type XmlParser } from '@komore/xml';

/**
 * Route 53 API client options
 */
export interface Route53ApiClientOptions extends AwsApiServiceClientOptions {
  /**
   * XML parser
   */
  readonly xmlParser: XmlParser;
}
