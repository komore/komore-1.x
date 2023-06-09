import { createSourceFile, ScriptTarget, type SourceFile } from 'typescript';

function createTestSource(sourceText: string): SourceFile {
  return createSourceFile('test.ts', sourceText, ScriptTarget.Latest);
}

export function registerHelpers(): void {
  (globalThis as { createTestSource?: typeof createTestSource }).createTestSource = createTestSource;
}
