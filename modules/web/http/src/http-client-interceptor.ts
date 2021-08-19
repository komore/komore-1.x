export interface HttpClientInterceptor<ContextType = never> {
  (request: Request, next: (request: Request) => 
}