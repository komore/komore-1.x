import { route53Domain } from '@komore/aws/route-53';
import { createEventType, eventProperties } from '@komore/event';

/**
 * Route 53 event
 */
export const route53Event = createEventType(route53Domain, {
  /**
   * A new public or private hosted zone has been created
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html CreateHostedZone}
   */
  hostedZoneCreated: eventProperties<CreateHostedZoneCommandOutput>(),
  /**
   * A hosted zone has been deleted
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html DeleteHostedZone}
   */
  hostedZoneDeleted: eventProperties<DeleteHostedZoneCommandOutput>(),
  /**
   * A resource record set has been created, changed or deleted
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html ChangeResourceRecordSets}
   */
  resourceRecordSetsChanged: eventProperties<ChangeResourceRecordSetsCommandOutput>(),
});
