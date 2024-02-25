import { type TypeScriptLabeledStatement } from '@komore/tsc';

import { type SpecificationBlock } from './specification-block';

export function specificationBlockStartToSpecificationBlock(): (
  blockStart: TypeScriptLabeledStatement
) => SpecificationBlock {}
