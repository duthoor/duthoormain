import { formatZodErrors } from './format-zod-error.js';
import { errorResponse } from './response-helpers.js';

/**
 * Creates an Express POST endpoint handler with Zod validation.
 * @template TBody
 * @param {import('zod').Schema<TBody>} schema - Zod schema to validate request body.
 * @param {(request: import('express').Request<any, any, TBody>, response: import('express').Response) => void} callback - Handler function.
 * @returns {(request: import('express').Request, response: import('express').Response) => void}
 */
export function makePostEndPoint(schema, callback) {
  return (request, response) => {
    const requestBodyResult = schema.safeParse(request.body);

    if (!requestBodyResult.success) {
      const errors = formatZodErrors(requestBodyResult.error);
      return errorResponse({
        res: response,
        type: 'VALIDATION_ERROR',
        message: Object.entries(errors)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n'),
        details: errors,
      });
    }

    return callback(request, response);
  };
}

/**
 * Creates an Express PUT endpoint handler with Zod validation.
 * @template TBody
 * @param {import('zod').Schema<TBody>} schema - Zod schema to validate request body.
 * @param {(request: import('express').Request<any, any, TBody>, response: import('express').Response) => void} callback - Handler function.
 * @returns {(request: import('express').Request, response: import('express').Response) => void}
 */
export function makeUpdateEndpoint(schema, callback) {
  return (request, response) => {
    const requestBodyResult = schema.safeParse(request.body);

    if (!requestBodyResult.success) {
      const errors = formatZodErrors(requestBodyResult.error);
      return errorResponse({
        res: response,
        type: 'VALIDATION_ERROR',
        message: Object.entries(errors)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n'),
        details: errors,
      });
    }

    return callback(request, response);
  };
}
