/**
 * Navigation item model
 */
export type NavigationItemModel = Readonly<{
  children?: ReadonlyArray<NavigationItemModel>;
  label: string;
  routerLink?: ReadonlyArray<string>;
}>;
