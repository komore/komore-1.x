/**
 * Route 53 linked service
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_LinkedService.html LinkedService}
 */
export interface Route53LinkedService {
  /**
   * Description
   */
  readonly Description?: string;
  /**
   * Service principal
   */
  readonly ServicePrincipal: string; // TODO: typed
}
