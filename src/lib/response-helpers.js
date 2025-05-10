/**
 * Standardized success response helper
 * @param {Object} params
 * @param {import("express").Response} params.res
 * @param {string} [params.message] - Human-readable success message (optional)
 * @param {Record<string, any>} params.data - Response payload
 * @param {number} [params.code=200] - HTTP status code (default: 200)
 * @returns {import("express").Response}
 */
export const successResponse = ({ res, data, code = 200, message = 'Success' }) => {
  return res.status(code).json({
    status: 'success',
    code,
    data,
    message,
  });
};

/**
 * Standardized error response helper
 * @param {Object} params
 * @param {import("express").Response} params.res
 * @param {"VALIDATION_ERROR"|"UNAUTHORIZED"|"NOT_FOUND"|"INTERNAL_SERVER_ERROR"} params.type - Error type
 * @param {string} params.message - Human-readable error message
 * @param {Record<string, any>} [params.details] - Additional error details (optional)
 * @returns {import("express").Response}
 */
export const errorResponse = ({ res, type, message, details = {} }) => {
  const statusCodes = {
    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  };

  const code = statusCodes[type] || 500;

  return res.status(code).json({
    status: 'error',
    code,
    error: {
      type,
      message,
      ...(Object.keys(details).length && { details }), // Only include if details exist
    },
  });
};
