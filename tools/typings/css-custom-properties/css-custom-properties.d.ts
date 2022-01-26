declare interface PropertyDefinition {
  name: string;
  syntax?: string;
  inherits: boolean;
  initialValue?: string;
}

// TODO: remove when merged alongside other CSS features https://github.com/microsoft/TypeScript/issues/38593
