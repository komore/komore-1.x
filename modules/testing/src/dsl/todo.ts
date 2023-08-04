import { type ScenarioBlock } from './scenario-block';

/**
 * Creates a placeholder scenario block
 *
 * @param description Description
 * @returns Placeholder scenario block
 */
export function todo(_description?: string): ScenarioBlock {
  return () => {};
}
