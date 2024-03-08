import { type kinesisRecordEncryptionTypes } from './kinesis-record-encryption-types';

/**
 * Kinesis record encryption type
 */
export type KinesisRecordEncryptionType = (typeof kinesisRecordEncryptionTypes)[number];
