/**
 * Modified and typed adaptation of JedWatson/classnames NPM package used to
 * filter out falsy values and minify it before being inserted into the DOM.
 *
 * @param classes {(false | null | undefined | string)[]} arr of classnames.
 * @returns {string} a minified string of classnames.
 */
export const classNames = (
  ...classes: (false | null | undefined | string)[]
) => {
  return classes.filter(Boolean).join(" ").replace(/\s+/gm, " ").trim();
};
