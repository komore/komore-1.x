import { type XmlToValueOptions } from './xml-to-value-options';

/**
 * Creates a function that returns a value, given XML
 *
 * @param options Options
 * @returns Function that returns a value, given XML
 */
export function xmlToValue<T>(options: XmlToValueOptions): (xml: string | ArrayBuffer) => Observable<T> {
  const { xmlParser } = options;
  return xml => xmlParser<T>(xml);
}
