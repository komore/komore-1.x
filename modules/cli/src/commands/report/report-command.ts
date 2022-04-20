import { createCliCommand, createCliFlag as flag } from '@komore/application-cli';
import { forkJoin, map, mapErrorTo, mapTo, mergeMap, mergeMapTo, of, tapNext, type Observable } from '@komore/reactive';
import { getNodeVersion, getOSArchitecture, getOSVersion } from '@komore/runtime/node';
import { detectPackageManagerType, getPackageManagerVersion, type PackageManagerType } from '@komore/schematics';

// TODO: make dynamic + discovery
/*import { getAwsCliVersion } from '@komore/stack-aws';
import { getAzCliProfiles, getAzCliVersion } from '@komore/stack-azure';
import { getGcloudCliVersion } from '@komore/stack-gcloud';*/

/**
 * report command
 */
export const reportCommand = createCliCommand(
  'report',
  $ => {
    const cwd = process.cwd();
    const versions = forkJoin({
      node: of(getNodeVersion()),
      os: of({
        version: getOSVersion(),
        architecture: getOSArchitecture(),
      }),
      packageManager: getPackageManagerInfo(cwd),
      /*aws: getAwsCliVersion(cwd),
      azureVersion: getAzCliVersion(cwd),
      azureProfiles: getAzCliProfiles(cwd),
      gcloud: getGcloudCliVersion(cwd),*/
    });

    return $.pipe(
      mergeMapTo(versions),
      tapNext(({ node, os, packageManager, /*aws, azureVersion, azureProfiles, gcloud*/ }) => {
        console.log('Versions');
        console.log('');
        console.log(`  Node   : ${node}`);
        console.log(`  OS     : ${os.version} (${os.architecture})`);
        console.log(`  ${packageManager.type.padEnd(6, ' ')} : ${packageManager.version}`);
        console.log('');
/*        console.log(`  aws    : ${aws}`);
        console.log(`  azure  : ${azureVersion}`);
        console.log(`  gcloud : ${gcloud}`);
        console.log('');
        console.log('Profiles');
        console.log('');
        console.log('  Azure  :');
        azureProfiles.forEach(({ id, name }, index) => {
          console.log(`    ${index + 1}. ${name} (${id})`);
        });*/
      }),
      mapTo(0)
    );
  },
  {
    description: 'Displays useful information requested when reporting issues',
    flags: {
      format: flag({
        description: 'Output format',
        // TODO: options: ['json', 'html'],
        type: 'string',
      }),
    },
  }
);

/**
 * Gets information about the package manager
 *
 * @param basePath Base path
 * @returns Package manager information
 */
function getPackageManagerInfo(basePath: string): Observable<PackageManagerInfo> {
  return detectPackageManagerType(basePath).pipe(
    mergeMap(type => getPackageManagerVersion(basePath, type).pipe(map(version => ({ type, version })))),
    mapErrorTo({ type: '????', version: 'no package manager found' })
  );
}

/**
 * Package manager information
 */
interface PackageManagerInfo {
  readonly type: PackageManagerType | string;
  readonly version: string;
}
