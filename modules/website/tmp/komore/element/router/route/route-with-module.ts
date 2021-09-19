/**
 * Route with a module
 */
export interface RouteWithModule<ModuleName extends string> {
  readonly module: ModulePath;
}
