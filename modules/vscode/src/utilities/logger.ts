import { window } from 'vscode';

/**
 * Logger
 */
export class Logger {
  private readonly outputChannel = window.createOutputChannel('komore');

  constructor() {
    this.outputChannel.show();
  }

  log(...lines: ReadonlyArray<string>): void {
    for (const line of lines) {
      this.outputChannel.appendLine(line);
    }
  }
}
