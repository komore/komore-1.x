/**
 * Viewport percentage length units
 */
export const VIEWPORT_PERCENTAGE_LENGTH_UNITS = [
  /**
   * Size relative to the viewport dimension in the block axis (1 = 1%)
   */
  'vb',
  /**
   * Size relative to the viewport height (1 = 1%)
   */
  'vh',
  /**
   * Size relative to the viewport dimension in the inline axis (1 = 1%)
   */
  'vi',
  /**
   * Size relative to the larger value between the viewport width and viewport height
   */
  'vmax',
  /**
   * Size relative to the smaller value between the viewport width and viewport height
   */
  'vmin',
  /**
   * Size relative to the viewport width (1 = 1%)
   */
  'vw'
] as const;
