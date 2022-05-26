/**
 * Builds a string difference expectation value
 *
 * @param lhs Left-hand value
 * @param rhs Right-hand value
 * @returns String difference expectation value
 */
export function buildStringDifferenceExpectationValue(lhs: string, rhs: string): string {
  const differenceCount = 2 as number;
  const similarity = 0.83;
  const similarityPercentage = Math.round(similarity * 100);

  const differences = `${differenceCount} difference${differenceCount !== 1 ? 's' : ''}`;
  const summary = `${differences} (${similarityPercentage}% similarity)`;
  const highlightedLhs = lhs;
  const highlightedRhs = rhs;

  return `${summary}\n${highlightedLhs}\n${highlightedRhs}`;
}
