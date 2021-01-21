// TODO: remove once https://github.com/microsoft/TypeScript/issues/38593 is fixed
declare global {
  interface PropertyDefinition {
    name: string;
    syntax?: string;
    inherits: boolean;
    initialValue?: string;
  }
}

/**
 * Processed style sheet
 */
export interface ProcessedStyleSheet {
  readonly properties: ReadonlyArray<PropertyDefinition>;
  readonly referencedProperties: ReadonlySet<string>;
  readonly cssStyleSheet: CSSStyleSheet;
}
