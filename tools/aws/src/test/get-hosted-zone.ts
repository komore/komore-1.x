import { type AwsApiServiceClientOptions } from '@komore/aws';
import { asRoute53HostedZoneId, createRoute53ApiClient, getRoute53HostedZone } from '@komore/aws/route-53';
import { createXmlParser } from '@komore/xml';

export function getHostedZone(clientOptions: AwsApiServiceClientOptions) {
  const xmlParser = createXmlParser({});
  const route53ApiClient = createRoute53ApiClient({ ...clientOptions, xmlParser });
  const getHostedZone = getRoute53HostedZone(route53ApiClient);
  const Id = asRoute53HostedZoneId('Z07119051IJ8RANE4YPS3');
  return getHostedZone({ Id });
}
