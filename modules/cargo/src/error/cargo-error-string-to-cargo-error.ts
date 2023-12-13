import { type ErrorFromType } from '@komore/error';
import { isNotNull } from '@komore/functional';
import { assert } from '@komore/runtime';

import { cargoError } from '../cargo.error';

/**
 * Returns a Cargo error, given a cargo command-line error string
 *
 * @param errorString Cargo command-line error string
 * @returns Cargo error
 */
export function cargoErrorStringToCargoError(errorString: string): ErrorFromType<typeof cargoError> {
  const errorMapper = errorMap.find(([regExp]) => errorString.match(regExp));
  if (errorMapper === undefined) {
    return cargoError.unhandledError({ errorString });
  }

  const [regExp, creator] = errorMapper;

  const matches = errorString.match(regExp);
  assert(isNotNull(matches));

  return creator(...matches.slice(1));
}

type CargoErrorMapper = readonly [
  regularExpression: RegExp,
  (...matches: ReadonlyArray<string>) => ErrorFromType<typeof cargoError>,
];

const errorMap: ReadonlyArray<CargoErrorMapper> = [
  [
    /^could not found `Cargo.toml` in `([^`]+)` or any parent directory$/,
    basePath => cargoError.notFound({ basePath }),
  ],
];
