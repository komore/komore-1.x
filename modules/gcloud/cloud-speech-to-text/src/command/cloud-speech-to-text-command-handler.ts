import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type cloudSpeechToTextCommand } from '../cloud-speech-to-text.command';

/**
 * Cloud Speech-to-Text command handler
 */
export type CloudSpeechToTextCommandHandler = CommandHandler<CommandFromType<typeof cloudSpeechToTextCommand>>;
