import type { SourceFile } from 'typescript';
import { createSourceFile, ScriptTarget } from 'typescript';

function createTestSource(sourceText: string): SourceFile {
  return createSourceFile('test.ts', sourceText, ScriptTarget.Latest);
}

export function registerHelpers(): void {
  (global as { createTestSource?: typeof createTestSource }).createTestSource = createTestSource;
}
