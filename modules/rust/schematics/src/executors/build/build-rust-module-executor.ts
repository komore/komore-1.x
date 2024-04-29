import { executeCargo } from '@komore/cargo';

import { type BuildOptions } from './build-options';

/**
 * Build Rust module executor
 * @param options Build schema
 * @param context
 * @returns
 */
const buildExecutor: Executor<BuildOptions> = async (_options, context) => {
  try {
    const args = ['build'];
    await executeCargo(context, args);
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      reason: e instanceof Error ? e.message : undefined,
    };
  }
};

export default buildExecutor;
