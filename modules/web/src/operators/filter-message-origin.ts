import { filter } from 'rxjs/operators';

/**
 * Filters based on a message's origin
 * @param originOrOrigins Origin or list of origins that are allowed
 */
export const filterMessageOrigin = <T>(...origins: ReadonlyArray<string>) =>
  filter((event: MessageEvent<T>) => origins.includes(event.origin));
