import { AwsAccessKeyCredentials } from '@komore/aws';
import { createRoute53ApiClient, listRoute53HostedZones } from '@komore/aws/route-53';
import { HttpClient } from '@komore/http/client';
import { NodeEnvironmentVariables } from '@komore/node/environment';

export function getHostedZones(
  httpClient: HttpClient,
  environmentVariables: NodeEnvironmentVariables,
  credentials: AwsAccessKeyCredentials
): Observable<unknown> {
  const route53ApiClient = createRoute53ApiClient({ credentials, environmentVariables, httpClient });
  const listHostedZones = listRoute53HostedZones(route53ApiClient);
  return listHostedZones({});
}
