import { type ReadonlyRecord } from '@komore/typescript';

import { type ScenarioBlock } from './scenario-block';

/**
 * Scenario block by name
 */
export type ScenarioBlockByName = ReadonlyRecord<string, ScenarioBlock>;
