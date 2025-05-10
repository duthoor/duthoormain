/**
 * Formats Zod validation errors for consistent API responses
 * @param {import("zod").ZodError} error - The Zod validation error
 * @returns {Record<string, string>} - Formatted field errors { fieldName: errorMessage }
 */
export const formatZodErrors = (error) => {
  /**@type {Record<string, string>} */
  const formattedErrors = {};

  error.errors.forEach((err) => {
    const field = err.path.join('.');
    formattedErrors[field] = err.message;
  });

  return formattedErrors;
};
