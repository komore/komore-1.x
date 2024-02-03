/**
 * eToro LightStreamer session
 */
export interface EToroLightStreamerSession {
  /**
   * Events
   */
  readonly events: Observable<unknown>;
}
