import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { api as apiClient } from "@/lib/api-client";

interface UseNewsOptions {
  limit?: number;
  page?: number;
}

export function useNews(options: UseNewsOptions = {}) {
  const queryKey = [api.news.list.path, options.limit, options.page];

  return useQuery({
    queryKey,
    queryFn: async () => {
      const params: Record<string, string | number> = {};
      if (options.limit) params.limit = options.limit;
      if (options.page) params.page = options.page;

      const result = await apiClient.get(api.news.list.path, params);
      return api.news.list.responses[200].parse(result);
    },
  });
}

export function useNewsItem(id: number) {
  return useQuery({
    queryKey: [api.news.get.path, id],
    queryFn: async () => {
      const result = await apiClient.get(api.news.get.path, { id });
      return api.news.get.responses[200].parse(result);
    },
  });
}
