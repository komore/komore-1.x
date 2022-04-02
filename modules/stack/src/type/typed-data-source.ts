import { type TerraformDataSource } from 'cdktf';
import { type Construct } from 'constructs';

/**
 * Creates a typed resource constructor
 * @param resourceTypeName Resource type name
 * @param constructor Constructor
 * @deprecated Will be removed when/if https://github.com/hashicorp/terraform-cdk/issues/1523 is accepted
 */
export function typedDataSource<
  ResourceTypeName extends string,
  DataSourceType extends TerraformDataSource,
  ConfigType
>(
  _resourceTypeName: ResourceTypeName,
  constructor: new (construct: Construct, id: string, config: ConfigType) => DataSourceType
): typeof constructor & {
  readonly tfResourceType: ResourceTypeName;
} {
  return constructor as typeof constructor & { readonly tfResourceType: ResourceTypeName };
}
