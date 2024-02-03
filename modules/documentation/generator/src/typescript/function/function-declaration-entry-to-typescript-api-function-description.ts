import { type FunctionDeclaration } from 'ts-morph';

import { type TypeScriptApiFunctionDescription } from '@komore/documentation';
import { isDefined } from '@komore/functional';
import { of } from '@komore/reactive';

import { documentationGeneratorError } from '../../documentation-generator.error';
import { functionDeclarationToTypeScriptApiFunctionDeclarationDescription } from './function-declaration-to-typescript-api-function-declaration-description';

/**
 * Creates a function that builds a TypeScript API function description from a function declaration entry
 *
 * @returns Function that builds a TypeScript API function description from a function declaration entry
 */
export function functionDeclarationEntryToTypeScriptApiFunctionDescription(): (
  entry: readonly [identifier: string, declarations: ReadonlyArray<FunctionDeclaration>]
) => Observable<TypeScriptApiFunctionDescription> {
  return ([name, declarations]) => {
    const functionDescription: TypeScriptApiFunctionDescription = {
      name,
      declarations: declarations
        .map(functionDeclarationToTypeScriptApiFunctionDeclarationDescription)
        .filter(isDefined),
    };

    if (functionDescription.declarations.length === 0) {
      throw documentationGeneratorError.noFunctionDocumentation({ functionName: name });
    }

    return of(functionDescription);
  };
}

/*
const project = new Project({
  tsConfigFilePath: tsConfig,
});
const mainSourceFile = project.getSourceFileOrThrow(main);
const exportedDeclarations = mainSourceFile.getExportedDeclarations();
// NOTE: multiple declarations due to multiple overloads
[...exportedDeclarations.entries()].forEach(([identifier, declarations]) => {
  console.log(identifier);
  declarations.forEach(declaration => {
    console.log('kind: ', declaration.getKind(), declaration.getKindName());
    //const declarationSourceFile = declaration.getSourceFile();
    //const sourceFilePath = declarationSourceFile.getFilePath();
    //       console.log('decl', declaration.getPreviousSiblingIfKindOrThrow(SyntaxKind.ImportDeclaration));
    //              console.log('kind: ', kindName);
    const jsdoc = declaration.getFirstChildByKind(SyntaxKind.JSDocComment);
    if (jsdoc !== undefined) {
      const documentation = jsdoc.getCommentText();
      const tags = jsdoc.getTags().map(tag => {
        const name = tag.getTagName()
        const text = tag.getCommentText();
        return [name, text] as const;
      });
      console.log('doc: ', documentation, tags);
    }
    //console.log(commentDeclaration);
  });
});*/
