export function argvToCommandLineArguments(argv: ReadonlyArray<string>): ReadonlyArray<string> {
  return argv[0]?.includes('node') ? argv.slice(1) : argv;
}
