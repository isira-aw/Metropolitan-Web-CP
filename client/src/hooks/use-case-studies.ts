import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { api as apiClient } from "@/lib/api-client";

interface UseCaseStudiesOptions {
  division?: string;
  limit?: number;
  page?: number;
}

export function useCaseStudies(options: UseCaseStudiesOptions = {}) {
  const queryKey = [api.caseStudies.list.path, options.division, options.limit, options.page];

  return useQuery({
    queryKey,
    queryFn: async () => {
      const params: Record<string, string | number> = {};
      if (options.division) params.division = options.division;
      if (options.limit) params.limit = options.limit;
      if (options.page) params.page = options.page;

      const result = await apiClient.get(api.caseStudies.list.path, params);
      return api.caseStudies.list.responses[200].parse(result);
    },
  });
}

export function useCaseStudy(id: number) {
  return useQuery({
    queryKey: [api.caseStudies.get.path, id],
    queryFn: async () => {
      const result = await apiClient.get(api.caseStudies.get.path, { id });
      return api.caseStudies.get.responses[200].parse(result);
    },
  });
}
