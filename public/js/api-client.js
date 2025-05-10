/**
 * API Client for JSON responses
 * @param {string} endpoint - API endpoint
 * @param {RequestInit & {
 *   redirectOnAuthError?: boolean
 *   loginPath?: string
 * }} [options] - Fetch options with additional config
 * @returns {Promise<{
 *   data: any,
 *   response: Response | null,
 *   error: { type: string, message: string, details?: any } | null
 * }>}
 */
export const apiClient = async (endpoint, options = {}) => {
  const { redirectOnAuthError = true, loginPath = '/login', ...fetchOptions } = options;

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
      ...fetchOptions,
      credentials: 'include', // Include cookies for authentication
      cache: 'no-cache',
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Handle unauthorized (401)
      if (response.status === 401 && redirectOnAuthError) {
        window.location.href = `${loginPath}?from=${encodeURIComponent(window.location.pathname)}`;
        return { data: null, response, error: null };
      }

      // Return standardized error from backend or create generic one
      const error = responseData?.error || {
        type: 'API_ERROR',
        message: responseData?.message || `Request failed with status ${response.status}`,
        details: responseData,
      };

      return { data: null, response, error };
    }

    console.log(responseData);

    // Success - return data from standardized response or raw response
    return {
      data: responseData?.data ?? responseData,
      response: responseData,
      error: null,
    };
  } catch (error) {
    // Network or JSON parsing errors
    return {
      data: null,
      response: null,
      error: {
        type: 'NETWORK_ERROR',
        message: error.message,
        details: error,
      },
    };
  }
};
