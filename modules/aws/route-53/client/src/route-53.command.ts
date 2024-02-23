import {
  type ChangeResourceRecordSetsCommandInput,
  type CreateHostedZoneCommandInput,
  type DeleteHostedZoneCommandInput,
} from '@aws-sdk/client-route-53';

import { createAwsCommandType } from '@komore/aws';
import { route53Domain } from '@komore/aws/route-53';
import { commandProperties } from '@komore/command';

export const route53Command = createAwsCommandType(route53Domain, {
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
  createHostedZone: commandProperties<CreateHostedZoneCommandInput>(),
  /**
   * Deletes a hosted zone
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html DeleteHostedZone}
   */
  deleteHostedZone: commandProperties<DeleteHostedZoneCommandInput>(),
});
