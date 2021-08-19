import { nodeToReportDescriptorWithMessageId, reportUsing, withRuleFix } from '@komore/eslint';
import type { TSESTree } from '@typescript-eslint/experimental-utils';
import { createRule } from '../utils/create-rule';

/**
 * no-rxjs-import rule
 */
export const noRxJSImport = createRule({
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'forbids importing directly from the rxjs package',
      recommended: 'error'
    },
    messages: {
      forbidden: 'direct rxjs package imports are forbidden.'
    },
    schema: [],
    type: 'problem'
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
          .forEach(reportUsing(context))
    };
  }
});
