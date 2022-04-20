/**
 * Terraform log resource
 */
export interface TerraformLogResource {
  readonly addr: string;
  readonly module: string;
  readonly resource: string;
  readonly implied_provider: string;
  readonly resource_type: string;
  readonly resource_name: string;
  readonly resource_key: null;
}
