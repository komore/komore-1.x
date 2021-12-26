import { type SourceFile, transform } from 'typescript';
import { createFeatureRecorderTransformerFactory } from './create-feature-recorder-transformer-factory';
import { Feature } from './feature';
import { type Specification } from './specification';

/**
 * Builds a specification from a source file
 * @param sourceFile Source file
 * @returns Specification
 */
export function buildSpecificationFromSourceFile(sourceFile: SourceFile): Specification {
  const features: Array<Feature> = [];
  const featureRecorderTransformerFactory = createFeatureRecorderTransformerFactory(feature => features.push(feature));
  const transformationResult = transform(sourceFile, [featureRecorderTransformerFactory]);
  console.log('diag', transformationResult.diagnostics);
  console.log('feat', features);
  return {
    features
  };
}
