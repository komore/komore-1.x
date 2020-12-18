import { Observable, ObservableInput } from 'rxjs';

export type HttpClient =
  | ((input: string | Request) => Observable<Response>)
  | (<ResponseType>(
      input: string | Request,
      project: (response: Response) => ObservableInput<ResponseType>
    ) => Observable<ResponseType>);
