import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function InquiryForm({ division }: { division?: string }) {
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      division: division || "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <Card className="shadow-sm border border-black/[0.06] rounded-xl overflow-hidden">
      <CardContent className="p-8">
        <h3 className="text-xl font-bold text-black mb-6">Send us a Message</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-[#424242]">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="h-11 bg-[#f8f8f8] border-black/[0.06] focus:border-[#144A92]/30 focus:ring-[#144A92]/10 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-[#424242]">Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="john@company.com" {...field} className="h-11 bg-[#f8f8f8] border-black/[0.06] focus:border-[#144A92]/30 focus:ring-[#144A92]/10 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-[#424242]">Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+94 77 123 4567" {...field} value={field.value || ''} className="h-11 bg-[#f8f8f8] border-black/[0.06] focus:border-[#144A92]/30 focus:ring-[#144A92]/10 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-[#424242]">Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Inquiry" {...field} value={field.value || ''} className="h-11 bg-[#f8f8f8] border-black/[0.06] focus:border-[#144A92]/30 focus:ring-[#144A92]/10 rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-[#424242]">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      className="min-h-[120px] bg-[#f8f8f8] border-black/[0.06] focus:border-[#144A92]/30 focus:ring-[#144A92]/10 resize-none rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full h-11 px-6 bg-[#144A92] text-white font-medium text-sm rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              {mutation.isPending ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Submit Inquiry
                  <Send className="w-4 h-4 ml-2" />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
