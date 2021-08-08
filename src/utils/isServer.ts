/**
 * Determine the execution context of the script by checking for the existence
 * of the window object in the global scope. If it doesn't exist then the
 * script is being run on the server otherwise from the browser.
 *
 * @returns {boolean} if the execution context is the server or not.
 */
export const isServer = () => typeof window === "undefined";
