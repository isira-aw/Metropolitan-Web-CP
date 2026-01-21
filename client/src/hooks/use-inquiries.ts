import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { api as apiClient } from "@/lib/api-client";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const result = await apiClient.post(api.inquiries.create.path, data);
      return api.inquiries.create.responses[201].parse(result);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
