/**
 * HTTP statuses
 */
export namespace HttpStatuses {
  export const Ok = 200 as const;
  export const Created = 201 as const;
  export const Accepted = 202 as const;
  export const NoContent = 204 as const;
  export const BadRequest = 400 as const;
  export const Unauthorized = 401 as const;
  export const Forbidden = 403 as const;
  export const NotFound = 404 as const;
  export const MethodNotAllowed = 405 as const;
  export const NotAcceptable = 406 as const;
  export const InternalServerError = 500 as const;
  export const NotImplemented = 501 as const;
  export const BadGateway = 502 as const;
}
