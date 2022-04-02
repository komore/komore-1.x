import { type ReadonlyRecord } from '@komore/typescript';
import { type Args } from '@storybook/csf';
import { type KomoreElementMeta } from './komore-element-meta';

export function toElementMetaFor<
  ElementType extends Element = Element,
  T extends ReadonlyRecord<string, unknown> = Args
>(
  elementClass: new () => ElementType,
  meta: Omit<KomoreElementMeta<ElementType, T>, 'elementClass' | 'component'> & { component: string }
): KomoreElementMeta<ElementType, T> {
  return {
    ...meta,
    elementClass
  };
}
