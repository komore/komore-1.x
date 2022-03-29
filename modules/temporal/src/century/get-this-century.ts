import { Temporal } from "@js-temporal/polyfill";

/**
 * Gets the current century
 * @returns Current century
 */
export function getThisCentury(): number {
    const now = Temporal.Now.plainDateISO();
    return Math.ceil(now.year / 100);
}