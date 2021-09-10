import type { Node } from 'typescript';
import { createPrinter, createSourceFile, EmitHint, NewLineKind, ScriptTarget } from 'typescript';

const leadingLinesRegExp = /^\s+/gm;
const emptyLinesRegExp = /^\s*\n/gm;

function trimSource(source: string): string {
  return source.replace(leadingLinesRegExp, '').replace(emptyLinesRegExp, '');
}

/**
 * Generates a source string using the test name as a basis for the virtual source file name
 * @param testName Test name
 * @param ast Abstract syntax tree node
 */
function generateSource(testName: string, ast: Node): string {
  const fileName = testName.replace(/\s+/g, '-') + '.ts';
  const sourceFile = createSourceFile(fileName, '', ScriptTarget.Latest);
  const printer = createPrinter({ newLine: NewLineKind.LineFeed });
  return printer.printNode(EmitHint.Unspecified, ast, sourceFile) + '\n';
}

/**
 * Generates a result from comparing sources
 * @param matcherName Matcher name
 * @param utils Jest matcher utilities
 * @param received Received source string
 * @param expected Expected source string
 * @returns Matcher result
 */
function generateResult(matcherName: string, utils: jest.MatcherUtils['utils'], received: string, expected: string) {
  const strippedReceived = trimSource(received);
  const strippedExpected = trimSource(expected);
  const pass = strippedReceived === strippedExpected;
  return {
    message: pass
      ? () =>
          utils.matcherHint(matcherName, undefined, undefined) +
          '\n\n' +
          `Expected: not ${utils.printExpected(expected)}`
      : () =>
          utils.matcherHint(matcherName, undefined, undefined) +
          '\n\n' +
          utils.printDiffOrStringify(strippedExpected, strippedReceived, 'Expected source', 'Received source', false),
    pass
  };
}

/**
 * Registers additional matchers for Jest
 */
export function registerMatchers(): void {
  expect.extend({
    toBeSource(received: Node, expected: string) {
      const source = generateSource(this.currentTestName, received);
      return generateResult('toBeSource', this.utils, source, expected);
    },
    toBeInlineSource(received: Node, expected: string) {
      const source = generateSource(this.currentTestName, received).replace(/\n/g, '');
      return generateResult('toBeInlineSource', this.utils, source, expected);
    }
  });
}
