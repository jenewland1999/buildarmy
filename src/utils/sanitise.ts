import DOMPurify from "dompurify";

/**
 * Sanitize markup or text when used inside dangerouslySetInnerHTML.
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export default function sanitize(content: string): string {
  return process.browser ? DOMPurify.sanitize(content) : content;
}
