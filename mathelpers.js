/**
 * mathHelpers.js
 * 
 * Collection of handy math functions to assist with common operations.
 * Useful for games, data visualization, or general numerical computations.
 * 
 * Author: [TuoNome] - For non-commercial use only.
 */

const MathHelpers = {
  /**
   * Linearly interpolate between two numbers.
   * @param {number} start - Start value.
   * @param {number} end - End value.
   * @param {number} t - Interpolation factor between 0 and 1.
   * @returns {number}
   */
  lerp(start, end, t) {
    return start + t * (end - start);
  },

  /**
   * Clamp a number between a min and max value.
   * @param {number} value 
   * @param {number} min 
   * @param {number} max 
   * @returns {number}
   */
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },

  /**
   * Returns a random float between min (inclusive) and max (exclusive).
   * @param {number} min 
   * @param {number} max 
   * @returns {number}
   */
  randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  },

  /**
   * Convert degrees to radians.
   * @param {number} degrees 
   * @returns {number}
   */
  degToRad(degrees) {
    return degrees * (Math.PI / 180);
  },

  /**
   * Convert radians to degrees.
   * @param {number} radians 
   * @returns {number}
   */
  radToDeg(radians) {
    return radians * (180 / Math.PI);
  }
};

// Usage example:
// console.log(MathHelpers.lerp(0, 10, 0.5)); // 5
// console.log(MathHelpers.clamp(15, 0, 10)); // 10

export default MathHelpers;
