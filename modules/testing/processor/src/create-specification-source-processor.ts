import { readFileContent } from '@komore/node/file-system';
import { map } from '@komore/reactive';
import {
  sourceTextToTypeScriptSourceFile,
  typeScriptNodeToSourceString,
  typeScriptNodeToTransformedTypeScriptNode,
} from '@komore/tsc';

import { type SpecificationSourceProcessor } from './specification-source-processor';
import { type SpecificationSourceProcessorOptions } from './specification-source-processor-options';
import { type SpecificationSourceProcessorResult } from './specification-source-processor-result';
import { createFeatureProcessorTransformerFactory } from './transformer/create-feature-processor-transformer-factory';

/**
 * Creates a specification source processor
 *
 * @param processorOptions Specification source processor options
 * @returns Specification source processor
 */
export function createSpecificationSourceProcessor(
  _processorOptions: SpecificationSourceProcessorOptions
): SpecificationSourceProcessor {
  const featureProcessorFactory = createFeatureProcessorTransformerFactory();
  const toTransformedSource = typeScriptNodeToTransformedTypeScriptNode(featureProcessorFactory);
  return ({ fileName }) => {
    const toString = typeScriptNodeToSourceString({ fileName });
    const toSourceFile = sourceTextToTypeScriptSourceFile({ fileName });

    return readFileContent(fileName, { encoding: 'utf-8' }).pipe(
      map(toSourceFile),
      map(sourceFile => {
        console.log('before');
        console.log(toString(sourceFile));
        const newSource = toTransformedSource(sourceFile);
        console.log('after');
        console.log(toString(newSource));
        return void 0 as unknown as SpecificationSourceProcessorResult;
      })
    );
  };
}

/*
TODO

Objective: an API similar to Spock in Groovy

- developers write specifications, as *.spec.ts files, typically one .spec.ts for each .ts
- read a *.spec.ts
- find each feature()
  - each one will be considered its own independent feature in the specification
  - there maybe be more than one per .spec.ts
- find each rule()
  - each one will be considered a sub group (or rule) of the parent specification
 */
