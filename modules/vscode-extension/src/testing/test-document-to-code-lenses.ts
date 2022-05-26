import { type CodeLens, type ProviderResult, type TextDocument } from 'vscode';

export function testDocumentToCodeLenses(): (testDocument: TextDocument) => ProviderResult<CodeLens[]> {
  return async testDocument => {
    try {
      const text = testDocument.getText();
      console.log('test document text', text);
      return [];
    } catch (e) {
      console.error('oopsie', e);
    }
  };
}
