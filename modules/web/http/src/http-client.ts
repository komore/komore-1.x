import { Observable, ObservableInput } from 'rxjs';

/**
 * HTTP client
 * @param input Input URL or 
 */
export type HttpClient =
  | ((input: string | Request) => Observable<Response>)
  | (<ResponseType>(
      input: string | Request,
      project: (response: Response) => ObservableInput<ResponseType>
    ) => Observable<ResponseType>);
