import { type CargoDependency } from '../metadata/cargo-dependency';
import { type CargoDependencyWithSource } from './cargo-dependency-with-source';

/**
 * Tests whether a dependency has a source defined
 * @param cargoDependency Cargo dependency
 * @returns true if the dependency has a source defined
 */
export function isCargoDependencyWithSource(
  cargoDependency: CargoDependency
): cargoDependency is CargoDependencyWithSource {
  return cargoDependency.source !== null;
}
