import { isArrayOfLength } from '@komore/collection';
import { type TypeScriptApiFunctionDeclarationDescription } from '@komore/documentation';
import { createTypeScriptApiDescription, type TypeScriptApiDescriptionOptions } from '@komore/documentation/generator';
import { endWith, map, startWith, tapNext } from '@komore/reactive';
import {
  createWorkspaceExecutorEvent,
  toWorkspaceExecutorTaskMessageEvent,
  type GenericWorkspaceExecutorEvent,
} from '@komore/schematics';

import { type DocumentModuleOptions } from './document-module-options';

/**
 * Documents a module
 *
 * @param options Document module options
 * @returns Stream of workspace executor events
 */
export function documentModule(options: DocumentModuleOptions): Observable<GenericWorkspaceExecutorEvent> {
  const {
    paths: { entryPoint, packageJson, tsConfig, tsConfigSpec },
    taskId,
  } = options;
  const typeScriptOptions: TypeScriptApiDescriptionOptions = {
    paths: {
      entryPoint,
      packageJson,
      tsConfig,
      ...(tsConfigSpec !== undefined ? { tsConfigSpec } : {}),
    },
  };
  const isOneDecl = isArrayOfLength(1);
  console.log('document', options);
  return createTypeScriptApiDescription(typeScriptOptions).pipe(
    tapNext(description => {
      console.log(`${description.name}`);
      for (const { name, declarations } of description.exports.functions) {
        if (isOneDecl(declarations)) {
          const [declaration] = declarations;
          printDeclaration(declaration, '  ');
        } else {
          console.log(`  ${name}()`);
          for (const declaration of declarations) {
            printDeclaration(declaration, '    ');
          }
        }
      }
    }),
    map(toWorkspaceExecutorTaskMessageEvent(taskId, 'document.done')),
    startWith(createWorkspaceExecutorEvent('task.begin', { taskId })),
    endWith(createWorkspaceExecutorEvent('task.end', { taskId }))
  );
}

function printDeclaration(declaration: TypeScriptApiFunctionDeclarationDescription, prefix: string): void {
  console.log(`${prefix}${declaration.name}(): ${declaration.returnValue.type.name}`);
  console.log(`${prefix}  ${declaration.description}`);
  if (declaration.returnValue.description.length > 0) {
    console.log(`${prefix}  @returns ${declaration.returnValue.description}`);
  }
}
