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
  readonly cssStyleSheet: CSSStyleSheet;
  readonly propertyDefinitions: ReadonlyArray<PropertyDefinition>;
  readonly referencedProperties: ReadonlySet<string>;
}
