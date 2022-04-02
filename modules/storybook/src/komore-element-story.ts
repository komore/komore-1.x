import { type Args, type StoryAnnotations } from '@storybook/csf';
import { type KomoreElementFramework } from './komore-element-framework';

/**
 * komore element story
 */
export type KomoreElementStory<T = Args> = StoryAnnotations<KomoreElementFramework, T>;
