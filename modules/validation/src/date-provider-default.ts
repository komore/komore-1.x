import { DateProvider } from "./date-provider";

/**
 * Date provider default implementation
 */
export class DateProviderDefault implements DateProvider {
  /**
   * Returns the date which serves as a reference for now
   * @returns Date representing now
   */
  getDate(): Date {
    return new Date();
  }
}
