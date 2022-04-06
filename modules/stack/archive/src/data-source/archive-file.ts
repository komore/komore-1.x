import { DataArchiveFile, type DataArchiveFileConfig } from '@cdktf/provider-archive';
import { dataSource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an archive file data source
 *
 * Generates an archive from a file, from a directory or from content.
 *
 * The data source has the following outputs:
 * 
 * - `outputBase64Sha256` - base64-encoded SHA-256 checksum of the archive
 * - `outputMd5` - MD5 checksum of the archive file
 * - `outputSha` - SHA-1 checksum of the archive file
 * - `outputSize` - size of the archive file
 *
 * ### Archive a file
 *
 * Generates a ZIP archive `output/archive.zip` from file `source/file.txt`.
 *
 * ```ts
 * archiveFile('exampleFile', {
 *   outputPath: 'output/archive.zip',
 *   sourceFile: 'source/file.txt'
 *   type: 'zip'
 * })
 * ```
 *
 * ### Archive a directory
 *
 * Generates a ZIP archive `output/archive.zip` from directory `source`, excluding files with a `.tmp` extension.
 *
 * ```ts
 * archiveFile('exampleDirectory', {
 *   excludes: [
 *     '*.tmp'
 *   ],
 *   outputPath: 'output/archive.zip',
 *   sourceDir: 'source',
 *   type: 'zip'
 * })
 * ```
 *
 * ### Archive content
 *
 * Generates a ZIP archive `output/path/archive.zip`, with a file `file1.txt` taken from variable `content1` and
 * `file2.txt` from variable `content`.
 *
 * ```ts
 * archiveFile('exampleContent', ({ variables: { content1, content2 } }) => ({
 *   outputPath: 'output/archive.zip',
 *   source: [{
 *     content: content1,
 *     filename: 'file1.txt'
 *   }, {
 *     content: content2,
 *     filename: 'file2.txt'
 *   }],
 *   type: 'zip'
 * }))
 * ```
 * 
 * @param dataSourceId Data source identifier
 * @param config Archive file data source configuration
 * @template ScopeType Scope type
 * @template DataSourceId Data source identifier
 * @remarks
 * The archive file data source does not support archiving symbolic links, cf.
 * {@link https://github.com/hashicorp/terraform-provider-archive/issues/6 Terraform Archive Provider issue #6}.
 */
export function archiveFile<ScopeType extends GenericScope, DataSourceId extends string>(
  dataSourceId: DataSourceId,
  config: ScopedConfiguration<ScopeType, DataArchiveFileConfig>
) {
  return dataSource(dataSourceId, DataArchiveFile, config);
}
