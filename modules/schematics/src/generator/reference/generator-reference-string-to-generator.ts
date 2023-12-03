import { isDefined } from '@komore/functional';
import { throwUnless, type Observable, map } from '@komore/reactive';
import { assert } from '@komore/runtime';

import { type PackageName } from '../../package/name/package-name';
import { schematicsError } from '../../schematics.error';
import { type WorkspaceGeneratorDescriptor } from '../workspace-generator-descriptor';
import { workspaceGeneratorDescriptorByGeneratorName } from '../workspace-generator-descriptor-by-generator-name';
import { type GeneratorReferenceString } from './generator-reference-string';
import { generatorReferenceStringToGeneratorReference } from './generator-reference-string-to-generator-reference';

/**
 * Creates a function that returns a workspace generator descriptor, given a generator reference string
 *
 * @param byPackage Map of package generator descriptors by package name
 * @returns Function that returns a workspace generator descriptor, given a generator reference string
 * @private
 */
export function generatorReferenceStringToGenerator(
  byPackage: ReadonlyMap<PackageName, Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>>>
): (generatorReferenceString: GeneratorReferenceString) => Observable<WorkspaceGeneratorDescriptor> {
  return generatorReferenceString => {
    const { generatorName, packageName } = generatorReferenceStringToGeneratorReference(generatorReferenceString);
    const packageWithGeneratorDescriptors$ = byPackage.get(packageName);
    assert(isDefined(packageWithGeneratorDescriptors$));
    return packageWithGeneratorDescriptors$.pipe(
      map(generators => generators.find(workspaceGeneratorDescriptorByGeneratorName(generatorName))),
      throwUnless(isDefined, () => schematicsError.generatorNotFound({ generatorName, packageName }))
    );
  };
}
