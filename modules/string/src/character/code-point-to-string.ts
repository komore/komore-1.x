export function codePointToString(codePoint: number): string;
export function codePointToString(codePoints: ReadonlyArray<number>): string;

export function codePointToString(codePointOrCodePoints: number | ReadonlyArray<number>): string {
  if (typeof codePointOrCodePoints === 'number') {
    const codePoint = codePointOrCodePoints;
    return String.fromCodePoint(codePoint);
  } else {
    const codePoints = codePointOrCodePoints;
    return String.fromCodePoint(...codePoints);
  }
}
