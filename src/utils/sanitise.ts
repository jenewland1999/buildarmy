import DOMPurify from "dompurify";

/**
 * Sanitize markup or text when used inside dangerouslySetInnerHTML.
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content: string): string =>
  process.browser ? DOMPurify.sanitize(content) : content;
