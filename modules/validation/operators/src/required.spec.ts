import { required } from './required';

describe('AssertUndefined constraint validator', () => {
    it('considers defined values to be valid', () => {
        // given
        const value: any = 5;
        // when
        const result: boolean = definedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers undefined values to be invalid', () => {
        // given
        const value = undefined;
        // when
        const result: boolean = definedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
