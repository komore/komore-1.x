import { execSync } from 'child_process';
import { join } from 'path';
import { existsSync, renameSync, rmdirSync } from 'fs';

const tempPath = process.argv[2];
const stackPath = process.argv[3];
const commandLine = `cdktf get --output ${tempPath}`;
const cdkProviderPath = join(tempPath, 'providers');
const komoreProviderPath = join(stackPath, 'provider');
const providerPathMapping = {
  aws: 'amazon',
  azurerm: 'azure',
  google: 'google'
};

console.log('Generating CDK TypeScript sources');
execSync(`pnpx ${commandLine}`);

for (const [sourcePathName, targetPathName] of Object.entries(providerPathMapping)) {
  const sourcePath = join(cdkProviderPath, sourcePathName);
  const generatedPath = join(komoreProviderPath, targetPathName, 'src', '.gen');
  console.log(`Moving CDK TypeScript sources: ${sourcePathName}`);
  if (existsSync(generatedPath)) {
    rmdirSync(generatedPath, { recursive: true });
  }
  renameSync(sourcePath, generatedPath);
}
