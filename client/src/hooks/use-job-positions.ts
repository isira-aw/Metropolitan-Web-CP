import { useQuery } from "@tanstack/react-query";
import { api as apiRoutes } from "@shared/routes";
import { api as apiClient } from "@/lib/api-client";
import type { JobPosition } from "@shared/schema";

export function useJobPositions() {
  return useQuery<JobPosition[]>({
    queryKey: ["job-positions"],
    queryFn: async () => {
      const result = await apiClient.get(apiRoutes.jobPositions.list.path);
      return apiRoutes.jobPositions.list.responses[200].parse(result);
    },
  });
}
