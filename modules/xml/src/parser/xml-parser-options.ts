/**
 * XML parser options
 */
export interface XmlParserOptions {
  readonly isArray?: (tagName: string, jPath: string, isLeafNode: boolean, isAttribute: boolean) => boolean;
}
