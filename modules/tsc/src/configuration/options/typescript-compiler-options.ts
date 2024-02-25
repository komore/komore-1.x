import { type CompilerOptions } from 'typescript';

import { type OmitIndexedAccess } from '@komore/typescript';

import { type TypeScriptCompilerImportsNotUsedAsValuesOption } from './typescript-compiler-imports-not-used-as-values-option';
import { type TypeScriptCompilerJsxOption } from './typescript-compiler-jsx-option';
import { type TypeScriptCompilerModule } from './typescript-compiler-module';
import { type TypeScriptCompilerModuleDetection } from './typescript-compiler-module-detection';
import { type TypeScriptCompilerModuleResolution } from './typescript-compiler-module-resolution';
import { type TypeScriptCompilerTarget } from './typescript-compiler-target';

/**
 * TypeScript compiler options
 */
export type TypeScriptCompilerOptions = Readonly<
  Omit<
    OmitIndexedAccess<CompilerOptions>,
    'importsNotUsedAsValues' | 'jsx' | 'module' | 'moduleDetection' | 'moduleResolution' | 'target'
  > & {
    readonly importsNotUsedAsValues?: TypeScriptCompilerImportsNotUsedAsValuesOption;
    readonly jsx?: TypeScriptCompilerJsxOption;
    readonly module?: TypeScriptCompilerModule;
    readonly moduleDetection?: TypeScriptCompilerModuleDetection;
    readonly moduleResolution?: TypeScriptCompilerModuleResolution;
    readonly target?: TypeScriptCompilerTarget;
  }
>;
