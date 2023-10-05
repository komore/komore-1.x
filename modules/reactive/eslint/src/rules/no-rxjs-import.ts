import { type TSESTree } from '@typescript-eslint/experimental-utils';

import { nodeToReportDescriptorWithMessageId, reportUsing, withRuleFix } from '@komore/linting';

import { createRule } from '../utils/create-rule';

/**
 * no-rxjs-import rule
 */
export const noRxJSImport = createRule({
  meta: {
    docs: {
      description: 'forbids importing directly from the RxJS package',
      recommended: 'error',
    },
    messages: {
      forbidden: 'direct RxJS package imports are forbidden.',
    },
    schema: [],
    type: 'problem',
  },
  name: 'no-rxjs-import',
  defaultOptions: [],
  create: context => {
    function isRxJSImport(_importClause: TSESTree.ImportClause): boolean {
      return false;
    }

    return {
      ImportDeclaration: importDeclaration =>
        importDeclaration.specifiers
          .filter(isRxJSImport)
          .map(nodeToReportDescriptorWithMessageId('forbidden'))
          .map(withRuleFix((fixer, { node }) => fixer.replaceText(node, '@komore/reactive')))
          .forEach(reportUsing(context)),
    };
  },
});
