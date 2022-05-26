import { type UnmetExpectationTranslations } from './unmet-expectation-translations';

/**
 * Unmet expectation translations (english)
 */
export const UnmetExpectationTranslationsEN: UnmetExpectationTranslations = {
  NaN: [1, 'is #{not a number}'],
  defined: [1, 'is #{defined}'],
  equal: [1, '#{===}', 2],
  falsy: [1, 'is #{falsy}'],
  greaterEqual: [1, '#{>=}', 2],
  greaterThan: [1, '#{>}', 2],
  instanceOf: [1, 'is #{an instance of}', 2],
  lessEqual: [1, '#{<=}', 2],
  lessThan: [1, '#{<}', 2],
  notEqual: [1, '#{!==}', 2],
  notNull: [1, 'is #{not null}'],
  null: [1, 'is #{null}'],
  propertyIn: [1, 'is #{a property of}', 2],
  truthy: [1, 'is #{truthy}'],
  undefined: [1, 'is #{undefined}'],
};
