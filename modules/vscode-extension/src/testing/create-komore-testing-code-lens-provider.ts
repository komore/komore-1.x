import { type CodeLensProvider } from 'vscode';
import { testDocumentToCodeLenses } from './test-document-to-code-lenses';

export function createKomoreTestingCodeLensProvider(): CodeLensProvider {
  return {
    provideCodeLenses: testDocumentToCodeLenses(),
  };
}
