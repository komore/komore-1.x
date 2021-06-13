/**
 * SES event record receipt status
 */
export interface SesEventRecordReceiptStatus {
  readonly status: 'DISABLED' | 'FAIL' | 'GRAY' | 'PASS' | 'PROCESSING_FAILED';
}
