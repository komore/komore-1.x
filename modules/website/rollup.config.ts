import alias from '@rollup/plugin-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import livereload from 'rollup-plugin-livereload';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';

interface TsConfig {
  readonly extends: string;
  readonly compilerOptions: {
    readonly paths: Record<string, ReadonlyArray<string>>;
  };
}

const projectDir = resolve(__dirname);
const projectRootDir = resolve(projectDir, '..', '..');
//const tsConfigPath = resolve(projectDir, 'website.tsconfig.application.json');

type PathAliasMap = ReadonlyMap<string, ReadonlyArray<string>>;

function getTsConfigPathAndAliases(
  projectDir: string,
  type: string
): readonly [tsConfigPath: string, pathAliases: PathAliasMap] {
  const tsConfigPath = resolve(projectDir, `tsconfig.${type}.json`);
  return [tsConfigPath, findPathAliases(tsConfigPath)];
}

function findPathAliases(tsConfigPath: string): PathAliasMap {
  const tsConfig = readTsConfig(tsConfigPath);
  console.log('json', tsConfig.extends);
  if (tsConfig.compilerOptions?.paths) {
    return new Map<string, ReadonlyArray<string>>(Object.entries(tsConfig.compilerOptions.paths));
  }

  if (tsConfig.extends) {
    const extendPath = resolve(dirname(tsConfigPath), tsConfig.extends);
    return findPathAliases(extendPath);
  }
  return new Map<string, ReadonlyArray<string>>();
}

function readTsConfig(path: string): Partial<TsConfig> {
  const fileContent = readFileSync(path, { encoding: 'utf-8' });
  return JSON.parse(fileContent) as Partial<TsConfig>;
}

function tsPathAliases(pathAliases: PathAliasMap) {
  return alias({
    entries: Array.from(pathAliases.entries()).map(([alias, value]) => ({
      find: new RegExp(`^${alias}$`),
      replacement: resolve(projectRootDir, value[0]),
    })),
  });
}

function tsBuild(tsConfigPath: string) {
  return esbuild({
    tsconfig: tsConfigPath,
    sourceMap: true,
    minify: process.env.NODE_ENV === 'production',
  });
}

const [websiteTsConfig, websitePaths] = getTsConfigPathAndAliases(projectDir, 'app');
const [searchWorkerTsConfig, searchWorkerPaths] = getTsConfigPathAndAliases(
  resolve(projectDir, 'search', 'worker'),
  'lib'
);

export default [
  {
    input: 'modules/website/search/worker/src/search-worker.ts',
    output: {
      file: 'dist/search-worker.js',
      format: 'es',
    },
    plugins: [tsPathAliases(searchWorkerPaths), tsBuild(searchWorkerTsConfig), nodeResolve({})],
  },
  {
    input: 'modules/website/src/main.ts',
    output: {
      file: 'dist/komore-website.js',
      format: 'es',
    },
    plugins: [
      tsPathAliases(websitePaths),
      tsBuild(websiteTsConfig),
      nodeResolve({}),
      scss({
        output: 'dist/komore-website.css',
        sourceMap: true,
        include: ['modules/website/src/*.scss'],
      }),
      serve({
        contentBase: ['modules/website/src', 'dist'],
      }),
      livereload({
        watch: ['modules/website/src/index.html', 'dist/*.js', 'dist/*.css'],
      }),
    ],
  },
];
