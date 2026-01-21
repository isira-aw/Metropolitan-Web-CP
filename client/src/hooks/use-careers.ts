import { useMutation } from "@tanstack/react-query";
import { api, type InsertJobApplication } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { api as apiClient } from "@/lib/api-client";

export function useApplyJob() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertJobApplication) => {
      const result = await apiClient.post(api.careers.apply.path, data);
      return api.careers.apply.responses[201].parse(result);
    },
    onSuccess: () => {
      toast({
        title: "Application Received",
        description: "Thank you for applying. Our HR team will review your application.",
      });
    },
    onError: (error) => {
      toast({
        title: "Application Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
