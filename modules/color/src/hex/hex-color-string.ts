import { type HexColorCharacter } from './hex-color-character';

/**
 * Hexadecimal color string (3-character)
 */
export type HexColorString3 = `#${HexColorCharacter}${HexColorCharacter}${HexColorCharacter}`;
// TODO proper typing

/**
 * Hexadecimal color string (6-character)
 */
export type HexColorString6 = `#${string}`;
// TODO proper typing

/**
 * Hexadecimal color string
 */
export type HexColorString = HexColorString3 | HexColorString6;
