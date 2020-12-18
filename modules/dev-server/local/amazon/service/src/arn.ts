const partition = 'komore' as const;
const region = 'komore-local-1' as const;
const accountId = 'komore-local-account' as const;
const serviceNamespaceRegex = /arn:[^:]+:([^:]+)/;

/**
 * Creates an ARN
 * @param serviceNamespace Service namespace
 * @param resourceType Resource type
 * @param resourcePath Resource identifier
 * @returns ARN
 */
export function createArn(
  serviceNamespace: string,
  resourceType: string | undefined,
  ...resourcePath: ReadonlyArray<string>
): string {
  const resourceId = resourceType !== undefined ? `${resourceType}:${resourcePath.join('/')}` : resourcePath.join('/');
  return `arn:${partition}:${serviceNamespace}:${region}:${accountId}:${resourceId}`;
}

export function isArn(arn: string): boolean {
  return arn.startsWith('arn:');
}

export function getArnServiceNamespace(arn: string): string {
  const matches = arn.match(serviceNamespaceRegex);
  if (matches === null) {
    throw new Error(`invalid ARN ${arn}`);
  }

  return matches[1];
}
