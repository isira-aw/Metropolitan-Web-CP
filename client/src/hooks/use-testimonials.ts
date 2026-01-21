import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { api as apiClient } from "@/lib/api-client";

interface UseTestimonialsOptions {
  division?: string;
  limit?: number;
}

export function useTestimonials(options: UseTestimonialsOptions = {}) {
  const queryKey = [api.testimonials.list.path, options.division, options.limit];

  return useQuery({
    queryKey,
    queryFn: async () => {
      const params: Record<string, string | number> = {};
      if (options.division) params.division = options.division;
      if (options.limit) params.limit = options.limit;

      const result = await apiClient.get(api.testimonials.list.path, params);
      return api.testimonials.list.responses[200].parse(result);
    },
  });
}
