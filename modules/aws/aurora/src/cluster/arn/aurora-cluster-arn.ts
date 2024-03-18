import { type RegionalArn } from '@komore/aws';

import { type AuroraClusterName } from '../name/aurora-cluster-name';

/**
 * Aurora cluster ARN
 */
export type AuroraClusterArn = RegionalArn<'rds', `cluster:${AuroraClusterName}`>;
