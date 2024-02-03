import { type NotionBotUser } from './notion-bot-user';
import { type NotionPersonUser } from './notion-person-user';

/**
 * Notion user
 */
export type NotionUser = NotionBotUser | NotionPersonUser;
