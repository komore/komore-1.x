import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type sendGridQuery } from '../sendgrid.query';

/**
 * SendGrid query handler
 */
export type SendGridQueryHandler = QueryHandler<QueryFromType<typeof sendGridQuery>>;
