import { HttpError, HttpStatuses } from '@komore/api/http';

/**
 * Resource not found exception
 */
export class ResourceNotFoundException extends HttpError {
  /**
   * Class constructor
   * @param message Message
   */
  constructor(message: string) {
    super(HttpStatuses.NotFound, message);
  }
}
