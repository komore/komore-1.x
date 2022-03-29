import { objectToValues } from '@komore/functional';
import { type ProjectConfiguration, type TargetConfiguration } from '@nrwl/devkit';
import { targetUsingExecutor } from '../target/target-using-executor';

export function projectToTargetsUsingExecutor(
  executorName: string
): (projectConfiguration: ProjectConfiguration) => ReadonlyArray<TargetConfiguration> {
  const usingExecutor = targetUsingExecutor(executorName);
  return ({ targets }) => (targets === undefined ? [] : objectToValues(targets).filter(usingExecutor));
}
