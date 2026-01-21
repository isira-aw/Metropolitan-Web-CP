import { buildUrl } from "@shared/routes";

/**
 * Centralized API client for all backend requests
 * Automatically handles base URL in production via VITE_API_BASE_URL
 */

interface ApiClientOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

/**
 * Main API client function
 * Automatically prepends VITE_API_BASE_URL in production
 */
export async function apiClient<T = unknown>(
  path: string,
  options: ApiClientOptions = {}
): Promise<T> {
  const { method = 'GET', body, headers = {}, params } = options;

  // Separate path params (like :id) from query params
  const pathParams: Record<string, string | number> = {};
  const queryParams: Record<string, string> = {};

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (path.includes(`:${key}`)) {
        pathParams[key] = value;
      } else {
        queryParams[key] = String(value);
      }
    });
  }

  // Build the base URL with path parameters
  let url = buildUrl(path, pathParams);

  // Append query parameters if any
  if (Object.keys(queryParams).length > 0) {
    const queryString = new URLSearchParams(queryParams).toString();
    url = `${url}?${queryString}`;
  }

  // Prepare request configuration
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  // Add body for non-GET requests
  if (body && method !== 'GET') {
    config.body = JSON.stringify(body);
  }

  // Make the request
  const response = await fetch(url, config);

  // Handle non-ok responses
  if (!response.ok) {
    // Try to parse error response
    try {
      const error = await response.json();
      throw new Error(error.message || `Request failed with status ${response.status}`);
    } catch {
      throw new Error(`Request failed with status ${response.status}`);
    }
  }

  // Parse and return the response
  return response.json() as Promise<T>;
}

/**
 * Convenience methods for common HTTP verbs
 */
export const api = {
  get: <T = unknown>(path: string, params?: Record<string, string | number>) =>
    apiClient<T>(path, { method: 'GET', params }),

  post: <T = unknown>(path: string, body: unknown) =>
    apiClient<T>(path, { method: 'POST', body }),

  put: <T = unknown>(path: string, body: unknown) =>
    apiClient<T>(path, { method: 'PUT', body }),

  patch: <T = unknown>(path: string, body: unknown) =>
    apiClient<T>(path, { method: 'PATCH', body }),

  delete: <T = unknown>(path: string) =>
    apiClient<T>(path, { method: 'DELETE' }),
};
