import { ProjectGraphBuilder, type ProjectGraph, type ProjectGraphProcessorContext } from '@nrwl/devkit';
import { getCargoWorkspace } from '../metadata/get-cargo-workspace';
import { isCargoDependencyWithSource } from '../metadata/is-cargo-dependency-with-source';
import { isCargoPackageWithSource } from '../metadata/is-cargo-package-with-source';
import { isPackageNameInProjectFileMap } from './is-package-name-in-project-file-map';
import { packageForDependencySource } from './package-for-dependency-source';
import { workspaceMemberToPackageFrom } from './workspace-member-to-package-from';

/**
 * Processes a project graph
 * @param graph Project graph
 * @param context Project graph processor context
 * @returns Processed project graph
 */
export function processProjectGraph(graph: ProjectGraph, context: ProjectGraphProcessorContext): ProjectGraph {
  const cargoWorkspace = getCargoWorkspace();
  if (cargoWorkspace === undefined) {
    return graph;
  }

  const projectGraphBuilder = new ProjectGraphBuilder(graph);
  const { packages, workspace_members } = cargoWorkspace;
  const packagesWithSource = packages.filter(isCargoPackageWithSource);

  workspace_members
    .map(workspaceMemberToPackageFrom(packagesWithSource))
    .filter(isPackageNameInProjectFileMap(context.fileMap))
    .filter(isCargoPackageWithSource)
    .forEach(cargoPackage => {
      cargoPackage.dependencies.filter(isCargoDependencyWithSource).forEach(({ name, source }) => {
        if (name in graph.nodes) {
          const dependencyPackage = packagesWithSource.find(packageForDependencySource(source));
          if (dependencyPackage !== undefined) {
            projectGraphBuilder.addNode({
              name,
              type: 'lib',
              data: {
                files: [],
                packageName: dependencyPackage.name,
                version: dependencyPackage.version
              }
            });
          }
        }

        projectGraphBuilder.addImplicitDependency(cargoPackage.name, name);
      });
    });

  return projectGraphBuilder.getUpdatedProjectGraph();
}
