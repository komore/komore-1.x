import { notNull } from './not-null';

describe('not null constraint validation operator function', () => {

    it('considers non-null values to be valid', () => {
        // given: a valid that is not null
        const value = 5;
        // when
        let result: boolean = notNullConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers null values to be invalid', () => {
        // given
        let value: any = null;
        // when
        let result: boolean = notNullConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
