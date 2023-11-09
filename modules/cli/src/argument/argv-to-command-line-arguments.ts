/**
 * Returns command-line arguments, given a process' arguments list
 *
 * @param argv Process argument list
 * @returns Command-line arguments
 */
export function argvToCommandLineArguments(argv: ReadonlyArray<string>): ReadonlyArray<string> {
  const isNode = argv[0]?.endsWith('node') && argv[1]?.endsWith('.js');
  const isTsNode = argv[0]?.includes('ts-node') && argv[1]?.endsWith('.ts');
  console.log(`node(${isNode}) / ts-node(${isTsNode})`);
  return isNode || isTsNode ? argv.slice(2) : argv;
}
