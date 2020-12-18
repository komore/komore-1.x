import { createFlow } from '@komore/message';
import { detectSyntax } from '../detect-syntax';

export const detectedSyntax = createFlow(
  input => detectSyntax()
);
