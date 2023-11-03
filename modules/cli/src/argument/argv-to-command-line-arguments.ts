/**
 * Returns command-line arguments, given a process' arguments list
 *
 * @param argv Process argument list
 * @returns Command-line arguments
 */
export function argvToCommandLineArguments(argv: ReadonlyArray<string>): ReadonlyArray<string> {
  return argv[0]?.includes('node') ? argv.slice(1) : argv;
}
