/**
 * HTTP client request options
 */
export type HttpClientRequestOptions<ContextType> = ContextType extends undefined
  ? Omit<RequestInit, 'signal'>
  : Omit<RequestInit, 'signal'> & {
      /**
       * Context
       */
      readonly context: ContextType;
    };
