import { useQuery } from "@tanstack/react-query";
import { api as apiRoutes } from "@shared/routes";
import { api as apiClient } from "@/lib/api-client";
import type { JobPosition } from "@shared/schema";

export function useJobPositions() {
  return useQuery<JobPosition[]>({
    queryKey: ["job-positions"],
    queryFn: async () => {
      const result = await apiClient.get(apiRoutes.jobPositions.list.path);
      const parsed = apiRoutes.jobPositions.list.responses[200].parse(result);
      return parsed.data;
    },
  });
}

interface UseJobPositionsPaginatedOptions {
  limit: number;
  page: number;
}

interface PaginatedResponse {
  data: JobPosition[];
  total: number;
  page: number;
  totalPages: number;
}

export function useJobPositionsPaginated(options: UseJobPositionsPaginatedOptions) {
  return useQuery<PaginatedResponse>({
    queryKey: ["job-positions-paginated", options.page, options.limit],
    queryFn: async () => {
      const params: Record<string, number> = {
        limit: options.limit,
        page: options.page,
      };
      const result = await apiClient.get(apiRoutes.jobPositions.list.path, params);
      return apiRoutes.jobPositions.list.responses[200].parse(result);
    },
  });
}
