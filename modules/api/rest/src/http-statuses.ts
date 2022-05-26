/**
 * HTTP statuses
 */
export class HttpStatuses {
  static readonly Ok = 200;
  static readonly Created = 201;
  static readonly Accepted = 202;
  static readonly NoContent = 204;
  static readonly BadRequest = 400;
  static readonly Unauthorized = 401;
  static readonly Forbidden = 403;
  static readonly NotFound = 404;
  static readonly MethodNotAllowed = 405;
  static readonly NotAcceptable = 406;
  static readonly InternalServerError = 500;
  static readonly NotImplemented = 501;
  static readonly BadGateway = 502;
}
