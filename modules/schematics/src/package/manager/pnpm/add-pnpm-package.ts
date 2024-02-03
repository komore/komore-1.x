import { executeChildProcess } from '@komore/node/process';
import { redactValue } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type PackageDependencyType } from '../package-dependency-type';
import { type PackageName } from '../../name/package-name';

export function addPnpmPackage(
  basePath: string
): (packageName: PackageName, packageVersion: string, type: PackageDependencyType) => Observable<void> {
  const execOptions = { cwd: basePath };
  const pnpmDependencyTypes: ReadonlyRecord<PackageDependencyType, string> = {
    development: 'dev',
    optional: 'optional',
    peer: 'peer',
    production: 'prod',
  };

  // TODO: @komore/pnpm client
  return (packageName, packageVersion, type) => {
    const pnpmDependencyType = pnpmDependencyTypes[type];
    const pnpnDependencyTypeFlag = `--save-${pnpmDependencyType}`;
    const commandLine = `pnpm add ${packageName}@${packageVersion} ${pnpnDependencyTypeFlag}`;
    return executeChildProcess(commandLine, execOptions).pipe(redactValue());
  };
}
