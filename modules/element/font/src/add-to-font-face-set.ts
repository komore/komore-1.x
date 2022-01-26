/**
 * Creates a function that adds a font face to a font face set
 * @param fontFaceSet Font face set
 * @returns Function that adds a font face to the font set
 */
export function addToFontFaceSet(fontFaceSet: FontFaceSet = document.fonts): (fontFace: FontFace) => void {
  return fontFace => fontFaceSet.add(fontFace);
}
