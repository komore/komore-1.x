import type { CallExpression, SourceFile } from "typescript";

/**
 * Tests whether a call expression is considered a background call
 * ```ts
 * afterAll(...)
 * afterEach(...)
 * beforeAll(...)
 * beforeEach(...)
 * ```
 * @param sourceFile Source file
 * @param callExpression Call expression
 * @returns true if the call expression is considered a background call
 */
export function isEligibleBackgroundCallExpression(sourceFile: SourceFile, callExpression: CallExpression): boolean {

}
