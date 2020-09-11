import { RawValueType } from '../value';

/**
 * Terraform variable
 */
export class TerraformVariable {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly defaultValue?: RawValueType
  ) {}
}
