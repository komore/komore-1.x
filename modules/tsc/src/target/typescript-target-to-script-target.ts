import { ScriptTarget } from 'typescript';

import { tscError } from '../tsc.error';
import { type TypeScriptTarget } from './typescript-target';

/**
 * TypeScript targe to script target
 */
export function typeScriptTargetToScriptTarget(target: TypeScriptTarget): ScriptTarget {
  const scriptTarget = map.get(target);
  if (scriptTarget === undefined) {
    throw tscError.unknownTypeScriptTarget({ target });
  }

  return scriptTarget;
}

const map: ReadonlyMap<TypeScriptTarget, ScriptTarget> = new Map([
  ['ES3', ScriptTarget.ES3],
  ['ES5', ScriptTarget.ES5],
  ['ES2015', ScriptTarget.ES2015],
  ['ES2016', ScriptTarget.ES2016],
  ['ES2017', ScriptTarget.ES2017],
  ['ES2018', ScriptTarget.ES2018],
  ['ES2019', ScriptTarget.ES2019],
  ['ES2020', ScriptTarget.ES2020],
  ['ES2021', ScriptTarget.ES2021],
  ['ES2022', ScriptTarget.ES2022],
  ['ES2023', ScriptTarget.Latest],
  ['ESNext', ScriptTarget.ESNext],
]);
