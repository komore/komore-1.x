import { isDefined } from '@komore/functional';
import { forkJoin, map, mergeMap, throwUnless, type Observable } from '@komore/reactive';
import { readPackageJson } from '@komore/node';

import { Project, SyntaxKind, type KindToNodeMappings, type SourceFile } from 'ts-morph';
import { functionDeclarationEntryToTypeScriptApiFunctionDescription } from './function/function-declaration-entry-to-typescript-api-function-description';
import { type TypeScriptApiDescription } from './typescript-api-description';
import { type TypeScriptApiDescriptionOptions } from './typescript-api-description-options';

/**
 * Creates a TypeScript API description
 *
 * @param options TypeScript API description options
 * @returns TypeScript API description
 */
export function createTypeScriptApiDescription(
  options: TypeScriptApiDescriptionOptions
): Observable<TypeScriptApiDescription> {
  const { entryPoint, packageJson, tsConfig: tsConfigFilePath } = options.paths;
  const packageName$ = readPackageJson(packageJson).pipe(
    map(packageJson => packageJson.name),
    throwUnless(isDefined, () => new Error(`${packageJson} does not have a name property`))
  );

  return packageName$.pipe(
    mergeMap(name => {
      console.log(`Package ${name}`);

      const project = new Project({
        tsConfigFilePath,
      });
      const mainSourceFile = project.getSourceFileOrThrow(entryPoint);
      const exportedDeclarations = getExportedDeclarationsEntries(mainSourceFile);
      const exportedFunctions = exportedDeclarations.filter(isExportedEntryOfKind(SyntaxKind.FunctionDeclaration));

      const functions$ = forkJoin(exportedFunctions.map(functionDeclarationEntryToTypeScriptApiFunctionDescription()));

      return forkJoin({
        functions: functions$,
      }).pipe(
        map(({ functions }) => ({
          name,
          exports: {
            functions,
          },
        }))
      );
    })
  );
}

function getExportedDeclarationsEntries(
  sourceFile: SourceFile
): ReadonlyArray<ExportedDeclarationEntry<ExportedSyntaxKind>> {
  type DeclarationType = KindToNodeMappings[ExportedSyntaxKind];
  const map = sourceFile.getExportedDeclarations() as ReadonlyMap<string, ReadonlyArray<DeclarationType>>;
  return [...map.entries()];
}

function isExportedEntryOfKind<Kind extends ExportedSyntaxKind>(
  syntaxKind: Kind
): (entry: ExportedDeclarationEntry<ExportedSyntaxKind>) => entry is ExportedDeclarationEntry<Kind> {
  return (entry: ExportedDeclarationEntry): entry is ExportedDeclarationEntry<Kind> => {
    const [, exportedDeclarations] = entry;
    return exportedDeclarations.every(declaration => declaration.getKind() === syntaxKind);
  };
}

type ExportedSyntaxKind =
  | SyntaxKind.ClassDeclaration
  | SyntaxKind.InterfaceDeclaration
  | SyntaxKind.FunctionDeclaration
  | SyntaxKind.TypeAliasDeclaration
  | SyntaxKind.VariableDeclaration;

type ExportedDeclarationEntry<Kind extends ExportedSyntaxKind = ExportedSyntaxKind> = readonly [
  identifier: string,
  exportedDeclaration: ReadonlyArray<KindToNodeMappings[Kind]>,
];
