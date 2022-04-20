import { isDefined } from '@komore/functional';
import { of, type Observable } from '@komore/reactive';
import { type FunctionDeclaration } from 'ts-morph';
import { parseJsDoc } from '../jsdoc/parse-js-doc';
import { parameterDeclarationToTypeScriptApiFunctionParameterDescription } from './parameter-declaration-to-typescript-api-function-parameter-description';
import { type TypeScriptApiFunctionDeclarationDescription } from './typescript-api-function-declaration-description';
import { type TypeScriptApiFunctionDescription } from './typescript-api-function-description';

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
      console.warn(`No valid declaration found for exported function "${name}"`);
    }

    return of(functionDescription);
  };
}

function functionDeclarationToTypeScriptApiFunctionDeclarationDescription(
  declaration: FunctionDeclaration
): TypeScriptApiFunctionDeclarationDescription | undefined {
  const jsDocNode = declaration.getJsDocs()[0];
  if (jsDocNode === undefined) {
    return undefined;
  }

  const jsDoc = parseJsDoc(jsDocNode);
  const declarationParameters = declaration.getParameters();
  //const typeParameters = declaration.getTypeParameters();
  //const returnType = declaration.getReturnType();
  const parameters = declarationParameters.map(
    parameterDeclarationToTypeScriptApiFunctionParameterDescription(jsDoc.parameters)
  );
  const returnValue = {
    description: jsDoc.returnValue ?? '',
    type: {
      name: 'void',
    },
  };

  return {
    description: jsDoc.description,
    name: 'test',
    parameters,
    returnValue,
  };
}
/*
const project = new Project({
  tsConfigFilePath: tsConfig,
});
const mainSourceFile = project.getSourceFileOrThrow(main);
const exportedDeclarations = mainSourceFile.getExportedDeclarations();
// NOTE: multiple declarations due to multiple overloads
Array.from(exportedDeclarations.entries()).forEach(([identifier, declarations]) => {
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
