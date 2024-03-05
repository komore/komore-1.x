import { type XMLParser } from 'fast-xml-parser';

import { type xmlParserSymbol } from './xml-parser-symbol';

/**
 * XML parser
 */
export interface XmlParser {
  /**
   * Parses XML
   *
   * @param xml XML
   * @returns Parsed value
   * @template T Value type
   */
  <T>(xml: string | ArrayBuffer): Observable<T>;
  readonly [xmlParserSymbol]: XMLParser;
}
