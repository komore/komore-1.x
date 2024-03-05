import { type XmlParser } from './parser/xml-parser';

/**
 *
 * @param parser
 * @returns
 */
export function xmlToValue<T>(parser: XmlParser): (xml: string | ArrayBuffer) => Observable<T> {
  return xml => parser<T>(xml);
}
