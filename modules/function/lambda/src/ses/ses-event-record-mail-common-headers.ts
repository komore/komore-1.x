/**
 * SES event record mail common headers
 */
export interface SesEventRecordMailCommonHeaders {
  readonly bcc?: ReadonlyArray<string>;
  readonly cc?: ReadonlyArray<string>;
  readonly date: string;
  readonly from?: ReadonlyArray<string>;
  readonly messageId: string;
  readonly replyTo?: ReadonlyArray<string>;
  readonly returnPath: string;
  readonly sender?: ReadonlyArray<string>;
  readonly subject?: string;
  readonly to?: ReadonlyArray<string>;
}
