import { type DateTimeString } from '@komore/temporal';
import { type ReadonlyRecord } from '@komore/typescript';
import { type UrlString } from '@komore/url';
import { type UUID } from '@komore/uuid';

import { type EToroMessageId } from './etoro-message-id';

/**
 * eToro message
 */
export interface EToroMessage {
  readonly ActionLink: string;
  readonly Aggregatable: boolean;
  readonly Category: 'Marketing' | 'Transactional';
  readonly CorrelationId: UUID;
  readonly ImageTitle: string;
  readonly ImageUrl: UrlString;
  readonly MarketingTemplateId?: number; // TODO: typed
  readonly Message: string;
  readonly MessageId: EToroMessageId;
  readonly NotificationType:
    | 'BuyTakeProfitReached'
    | 'CommentedOnYourPost'
    | 'CommentOnAPostYouFollowing'
    | 'ComplianceAPIKYC6MonthsUpdateConfirmQuestionaire'
    | 'InterestPayment'
    | 'StartedFollowingYou'
    | (string & {});
  readonly PublishDate: DateTimeString;
  readonly ReadStatus: 'Read';
  readonly RtlLanguage: boolean;
  readonly SubCategory: 'Account' | 'Marketing' | 'Social' | 'Trading';
  readonly UserParameters?: ReadonlyRecord<string, unknown>;
  readonly Version: 'V1';
}
