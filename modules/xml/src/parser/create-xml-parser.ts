import { XMLParser } from 'fast-xml-parser';

import { deferValue } from '@komore/reactive';

import { type XmlParser } from './xml-parser';
import { type XmlParserOptions } from './xml-parser-options';
import { xmlParserSymbol } from './xml-parser-symbol';

/**
 * Creates an XML parser
 *
 * @param parserOptions XML parser options
 * @returns XML parser
 */
export function createXmlParser(_parserOptions: XmlParserOptions): XmlParser {
  const xmlParser = new XMLParser({
    ignoreDeclaration: true,
    ignoreAttributes: false,
    parseAttributeValue: true,
  });

  const parser = <T>(xml: string | ArrayBuffer) =>
    deferValue(() => {
      const xmlString = typeof xml === 'string' ? xml : new TextDecoder().decode(xml);
      return xmlParser.parse(xmlString) as T;
    });

  parser[xmlParserSymbol] = xmlParser;

  return parser;
}
