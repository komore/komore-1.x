import { type AwsApiServiceClientOptions } from '@komore/aws';
import { createRoute53ApiClient, listRoute53HostedZones } from '@komore/aws/route-53';
import { createXmlParser } from '@komore/xml';

export function getHostedZones(clientOptions: AwsApiServiceClientOptions) {
  const xmlParser = createXmlParser({});
  const route53ApiClient = createRoute53ApiClient({ ...clientOptions, xmlParser });
  const listHostedZones = listRoute53HostedZones(route53ApiClient);
  return listHostedZones({});
}
