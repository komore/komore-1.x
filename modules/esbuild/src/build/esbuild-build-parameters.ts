import { type BuildOptions } from 'esbuild';

/**
 * esbuild build parameters
 */
export interface EsbuildBuildParameters extends Omit<BuildOptions, 'absWorkingDir'> {}
