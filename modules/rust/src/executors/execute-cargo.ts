import { type ExecutorContext } from '@nrwl/devkit';
import { spawn } from 'child_process';

/**
 * Executes the Cargo command-line application
 * @param context Context
 * @param args Arguments
 * @returns Promise that resolves once the command has completed
 */
export function executeCargo(context: ExecutorContext, args: ReadonlyArray<string>): Promise<void> {
  console.log(`> cargo ${args.join(' ')}`);

  return new Promise<void>((resolve, reject) => {
    const process = spawn('cargo', args, {
      cwd: context.root,
      shell: true,
      stdio: 'inherit'
    });

    process.on('error', reject).on('close', code => {
      if (code !== null) {
        const error = new Error(`cargo execution failed (${code})`);
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
