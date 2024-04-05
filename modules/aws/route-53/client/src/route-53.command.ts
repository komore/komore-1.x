import { route53Domain, type CreateRoute53HostedZoneParameters, type Route53HostedZoneId } from '@komore/aws/route-53';
import { commandProperties, createCommandType } from '@komore/command';

/**
 * Route 53 command
 */
export const route53Command = createCommandType(route53Domain, {
  /**
   * Creates, changes or deletes a resource record set
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html ChangeResourceRecordSets}
   */
  changeResourceRecordSets: commandProperties<ChangeResourceRecordSetsCommandInput>(),
  /**
   * Creates a new public or private hosted zone has been created
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html CreateHostedZone}
   */
  createHostedZone: commandProperties<CreateRoute53HostedZoneParameters>(),
  /**
   * Deletes a hosted zone
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html DeleteHostedZone}
   */
  deleteHostedZone: commandProperties<Route53HostedZoneId>(),
});
