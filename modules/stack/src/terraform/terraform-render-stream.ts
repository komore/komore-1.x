import { ValueType } from '../value';

export class TerraformRenderStream {
  private buffer: string = '';

  render(...strs: string[]): this {
    for (const str of strs) {
      this.buffer = this.buffer + str;
    }

    return this;
  }

  renderLine(str: string): this {
    return this.render(str, '\n');
  }

  renderLineBreak(): this {
    return this.render('\n');
  }

  renderTokens(...tokens: string[]): this {
    return this.render(tokens.join(' '));
  }

  output(): this {
    console.log(this.buffer);
    return this;
  }
}

/**
 * Terraform indented render stream
 */
class TerraformIndentedRenderStream extends TerraformRenderStream {
  
}
