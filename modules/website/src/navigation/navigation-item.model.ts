/**
 * Navigation item model
 */
export interface NavigationItemModel {
  readonly children?: ReadonlyArray<NavigationItemModel>;
  readonly label: string;
  readonly routerLink?: ReadonlyArray<string>;
};
