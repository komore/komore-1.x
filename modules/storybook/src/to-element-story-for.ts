import { objectToEntries } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';
import { type Args } from '@storybook/csf';
import { type KomoreElementMeta } from './komore-element-meta';

export function toElementStoryFor<ElementType extends Element, MetaArgs extends ReadonlyRecord<string, unknown> = Args>(
  meta: KomoreElementMeta<ElementType, MetaArgs>
): <ExtraArgs extends ReadonlyRecord<string, unknown> = Args>(
  extraArgs?: ExtraArgs
) => <T extends ReadonlyRecord<string, unknown> = Args>(args: T) => ElementType {
  const elementPrototype = meta.elementClass.prototype;
  const elementPrototypeDescriptors = Object.getOwnPropertyDescriptors(elementPrototype);
  const propertyNames = objectToEntries(elementPrototypeDescriptors)
    .filter(([, descriptor]) => descriptor.set !== undefined)
    .map(([propertyKey]) => propertyKey);

  return <ExtraArgs extends ReadonlyRecord<string, unknown>>(extraArgs?: ExtraArgs) => {
    const element = new meta.elementClass() as ElementType;
    return args => {
      const allArgs = {
        ...extraArgs,
        ...args
      };

      objectToEntries(allArgs)
        .filter(([propertyName]) => propertyNames.includes(propertyName))
        .forEach(([propertyName, propertyValue]) => {
          (element as Record<string, unknown>)[propertyName] = propertyValue;
        });

      return element;
    };
  };
}
