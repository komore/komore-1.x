import { languages, type DocumentFilter, type ExtensionContext } from 'vscode';
import { createKomoreTestingCodeLensProvider } from '../testing/create-komore-testing-code-lens-provider';

export function addLanguageCodeLensProviders(extensionContext: ExtensionContext): void {
  const selectors: ReadonlyArray<DocumentFilter> = [
    {
      language: 'typescript',
      //pattern: '*.spec.ts',
      //scheme: 'file',
    },
  ];
  extensionContext.subscriptions.push(
    languages.registerCodeLensProvider(selectors, createKomoreTestingCodeLensProvider())
  );
}
