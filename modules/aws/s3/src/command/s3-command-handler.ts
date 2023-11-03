import { type CommandHandler } from '@komore/command';

import { type s3Command } from '../s3.command';

/**
 * S3 command handler
 */
export type S3CommandHandler = CommandHandler<typeof s3Command>;
