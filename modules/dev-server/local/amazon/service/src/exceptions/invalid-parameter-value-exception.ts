import { HttpError, HttpStatuses } from '@komore/api/http';

/**
 * Invalid parameter value exception
 */
export class InvalidParameterValueException extends HttpError {
  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(HttpStatuses.BadRequest, message);
  }
}
