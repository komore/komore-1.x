/**
 * Route with a module
 */
export interface RouteWithModule<ModulePath extends string> {
  readonly module: ModulePath;
}
