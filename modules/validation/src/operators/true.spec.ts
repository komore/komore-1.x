import { _true } from './true';

describe('true constraint validator', () => {
    it('considers true boolean values to be valid', () => {
        // given
        const value: boolean = true;
        // when
        const result: boolean = trueConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers false boolean values to be invalid', () => {
        // given
        const value: boolean = false;
        // when
        const result: boolean = trueConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
