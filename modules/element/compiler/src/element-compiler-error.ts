/**
 * Element compiler error
 */
export class ElementCompilerError extends Error {
  /**
   * Class constructor
   * @param errorCode Error code
   * @param message Message
   */
  constructor(readonly errorCode: number, message: string) {
    super(message);
    this.name = 'ElementCompilerError';
  }
}
