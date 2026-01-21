import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

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

      const url = buildUrl(api.testimonials.list.path);
      const queryString = new URLSearchParams(params as Record<string, string>).toString();
      const finalUrl = queryString ? `${url}?${queryString}` : url;

      const res = await fetch(finalUrl);
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      return api.testimonials.list.responses[200].parse(await res.json());
    },
  });
}
