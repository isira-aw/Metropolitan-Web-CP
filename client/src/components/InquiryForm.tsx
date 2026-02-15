import { useState } from "react";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DIVISIONS } from "@shared/schema";

interface InquiryFormProps {
  division?: string;
}

export function InquiryForm({ division = "" }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutate, isPending } = useCreateInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          division: "",
          message: "",
        });
      },
    });

    setIsSubmitting(false);
  };

  return (
    <Card className="border-gray-200">
      <CardHeader className="bg-color-accent-primary/30">
        <CardTitle className="text-xl">Send an Inquiry</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="John Doe"
              required
              className="border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="john@example.com"
              required
              className="border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              placeholder="+1 (555) 123-4567"
              className="border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="division">Division</Label>
            <select
              id="division"
              value={formData.division}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, division: e.target.value }))
              }
              className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white text-color-text focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            >
              <option value="">Select a division</option>
              {DIVISIONS.map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Tell us about your project requirements..."
              rows={5}
              required
              className="border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white button-hover"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
