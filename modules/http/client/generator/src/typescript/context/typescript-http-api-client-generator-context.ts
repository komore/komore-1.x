import { type TypeScriptContext, type TypeScriptSourceFileOptions } from '@komore/tsc';

/**
 * TypeScript HTTP API client generator context
 */
export interface TypeScriptHttpApiClientGeneratorContext {
  /**
   * Base identifier
   */
  readonly baseIdentifier: string;
  /**
   * TypeScript context
   */
  readonly context: TypeScriptContext;
  /**
   * Source file options
   */
  readonly sourceFileOptions: Omit<TypeScriptSourceFileOptions, 'fileName'>;
}
