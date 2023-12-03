import { InstalledPackage } from './installed-package';
import { LocalPackage } from './local-package';

export function isInstalledPackage(localPackage: LocalPackage): localPackage is InstalledPackage {
  return 'dependencyType' in localPackage;
}
