import { NavigationItemModel } from '../navigation';

/**
 * Configuration model
 */
export type ConfigurationModel = Readonly<{
  navigation: Readonly<{
    content: ReadonlyArray<NavigationItemModel>;
  }>;
}>;
