import { type ReadonlyRecord } from '@komore/typescript';
import { type Args, type ComponentAnnotations } from '@storybook/csf';
import { type KomoreElementFramework } from './komore-element-framework';

/**
 * komore element meta
 */
export interface KomoreElementMeta<
  ElementType extends Element = Element,
  T extends ReadonlyRecord<string, unknown> = Args
> extends ComponentAnnotations<KomoreElementFramework, T> {
  readonly elementClass: new () => ElementType;
}
