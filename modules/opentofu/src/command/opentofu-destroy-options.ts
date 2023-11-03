import { type OpenTofuApplyOptions } from './opentofu-apply-options';

/**
 * `tofu destroy` options
 *
 * @note {@link https://opentofu.org/docs/cli/commands/destroy tofu destroy}
 */
export type OpenTofuDestroyOptions = Omit<OpenTofuApplyOptions, 'destroy'>;
