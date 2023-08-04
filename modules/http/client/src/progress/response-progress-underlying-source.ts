/**
 * HTTP client response progress underlying byte source
 *
 * @private
 */
export class ResponseProgressUnderlyingSource implements UnderlyingSource<Uint8Array> {
  /**
   * Class constructor
   *
   * @param project Function Reader
   * @param observer Response progress observer
   */
  constructor(private readonly project: (controller: ReadableStreamController<Uint8Array>) => void) {}

  /**
   * Callback triggered upon construction
   *
   * @param controller Controller
   */
  start(controller: ReadableStreamController<Uint8Array>): void | PromiseLike<void> {
    this.project(controller);
  }
}
