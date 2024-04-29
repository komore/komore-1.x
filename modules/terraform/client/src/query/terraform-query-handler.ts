import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type terraformQuery } from '../terraform.query';

/**
 * Terraform query handler
 */
export type TerraformQueryHandler = QueryHandler<QueryFromType<typeof terraformQuery>>;
