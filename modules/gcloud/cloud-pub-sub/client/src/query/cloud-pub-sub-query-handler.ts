import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type cloudPubSubQuery } from '../../cloud-pub-sub.query';

/**
 * Cloud Pub/Sub query handler
 */
export type CloudPubSubQueryHandler = QueryHandler<QueryFromType<typeof cloudPubSubQuery>>;
