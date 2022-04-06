import { type TerraformResource } from 'cdktf';
import { type Construct } from 'constructs';

/**
 * Creates a typed resource constructor
 *
 * @param resourceTypeName Resource type name
 * @param constructor Constructor
 * @deprecated Will be removed once https://github.com/hashicorp/terraform-cdk/issues/1523 is released and used by providers
 */
export function typedResource<ResourceTypeName extends string, ResourceType extends TerraformResource, ConfigType>(
  _resourceTypeName: ResourceTypeName,
  constructor: new (construct: Construct, id: string, config: ConfigType) => ResourceType
): typeof constructor & {
  readonly tfResourceType: ResourceTypeName;
} {
  return constructor as typeof constructor & { readonly tfResourceType: ResourceTypeName };
}
