import { type PackageName } from '../../package/name/package-name';
import { schematicsError } from '../../schematics.error';
import { type GeneratorName } from '../name/generator-name';
import { type GeneratorReference } from './generator-reference';
import { type GeneratorReferenceString } from './generator-reference-string';
import { generatorReferenceStringRegExp } from './generator-reference-string-reg-exp';

/**
 * Returns an generator reference, given an generator reference string
 *
 * @param generatorReferenceString Generator reference string
 * @returns Generator reference
 */
export function generatorReferenceStringToGeneratorReference(
  generatorReferenceString: GeneratorReferenceString
): GeneratorReference {
  const matches = generatorReferenceString.match(generatorReferenceStringRegExp) as
    | readonly [matched: string, packageName: PackageName, generatorName: GeneratorName]
    | null;
  if (matches === null) {
    throw schematicsError.invalidGeneratorReferenceString({ generatorReferenceString });
  }

  const [, packageName, generatorName] = matches;
  return {
    generatorName,
    packageName,
  };
}
