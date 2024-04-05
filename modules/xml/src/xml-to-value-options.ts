import { type XmlParser } from './parser/xml-parser';

/**
 * XML to value options
 */
export interface XmlToValueOptions {
  /**
   * XML parser
   */
  readonly xmlParser: XmlParser;
}
