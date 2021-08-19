import type { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';

/**
 * Creates a function that returns a report descriptor from a node and a message identifier
 * @param messageId Mesasge identifier
 * @returns Function that returns a report descriptor from a node and the message identifier
 * @template MessageId Message identifier
 */
export function nodeToReportDescriptorWithMessageId<MessageId extends string>(
  messageId: MessageId
): (
  node: TSESTree.Node | TSESTree.Comment | TSESTree.Token
) => TSESLint.ReportDescriptor<MessageId> & { node: TSESTree.Node | TSESTree.Comment | TSESTree.Token } {
  return node => ({
    messageId,
    node
  });
}
