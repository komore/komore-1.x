import { AbstractConstraintValidator } from './AbstractConstraintValidator';
import { ConstraintValidationContext, Validator, ValidatorOptions } from '../validation';
import { createMockInstance } from 'jest-create-mock-instance';

// NOTE: required due to jest-date-mock
declare var global: any;
global.Date = Object.getPrototypeOf(new Date()).constructor;

class AbstractMockedConstraintValidator<T> extends AbstractConstraintValidator<T> {
    isValidValue!: jest.Mock<(testedValue: T) => boolean>;
}

describe('Abstract constraint validator', () => {
    let abstractConstraintValidator: AbstractMockedConstraintValidator<any>;
    let constraintValidationContext: jest.Mocked<ConstraintValidationContext>;
    let validatorOptions: ValidatorOptions;
    let validator: jest.Mocked<Validator>;

    beforeEach(() => {
        validatorOptions = new ValidatorOptions();
        validator = createMockInstance(Validator);
        validator.getValidatorOptions.mockReturnValue(validatorOptions);
        constraintValidationContext = createMockInstance(ConstraintValidationContext as any);
        constraintValidationContext.getValidator = jest.fn<() => Validator>();
        constraintValidationContext.getValidator.mockReturnValueOnce(validator);
    });

    describe('automatically validates', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator();
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: any) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
        });

        it('undefined values', () => {
            // given
            const value: any = undefined;
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('null values', () => {
            // given
            const value: any = null;
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

    describe('can filter objects', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator(Object);
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: object) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
        });

        it('accepts objects', () => {
            // given
            const value: Object = {};
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
        });

        it('rejects strings', () => {
            // given
            const value: string = '123';
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects numbers', () => {
            // given
            const value: number = 123;
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects booleans', () => {
            // given
            const value: boolean = true;
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

    describe('can filter arrays', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator(Array);
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: Array<any>) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
        });

        it('accepts arrays', () => {
            // given
            const value: Array<number> = [123];
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
        });

        it('rejects strings', () => {
            // given
            const value: string = '[123]';
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects numbers', () => {
            // given
            const value: number = 123;
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects booleans', () => {
            // given
            const value: boolean = true;
            // when
            const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

});
