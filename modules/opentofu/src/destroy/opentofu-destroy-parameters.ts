import { type OpenTofuApplyParameters } from '../apply/opentofu-apply-parameters';

/**
 * `tofu destroy` parameters
 *
 * @note {@link https://opentofu.org/docs/cli/commands/destroy tofu destroy}
 */
export type OpenTofuDestroyParameters = Omit<OpenTofuApplyParameters, 'destroy'>;
