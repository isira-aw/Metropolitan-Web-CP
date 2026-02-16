import { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useApplyJob } from "@/hooks/use-careers";
import { useJobPositions } from "@/hooks/use-job-positions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertJobApplicationSchema, type InsertJobApplication, DIVISION_VALUES, type DivisionKey } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2, FileUp, X, Download } from "lucide-react";
import { SectionHeaderSmall } from "@/components/SectionHeaderSmall";
import type { JobPosition } from "@shared/schema";

export default function Careers() {
  const mutation = useApplyJob();
  const { data: jobPositions, isLoading: positionsLoading } = useJobPositions();
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const [resumeFile, setResumeFile] = useState<string>("");
  const [resumeFileName, setResumeFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<InsertJobApplication>({
    resolver: zodResolver(insertJobApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      portfolioUrl: "",
      coverLetter: "",
      resumePdf: "",
    },
  });

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setResumeFile(base64);
      setResumeFileName(file.name);
      form.setValue("resumePdf", base64);
    };
    reader.readAsDataURL(file);
  };

  const removeResume = () => {
    setResumeFile("");
    setResumeFileName("");
    form.setValue("resumePdf", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  function onSubmit(data: InsertJobApplication) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        removeResume();
      },
    });
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="bg-[#f8f8f8] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Join Our Team" subtitle="Build your career with a global leader." />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Job Listings */}
          <div>
            <SectionHeaderSmall title="Open Positions" />

            {positionsLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="animate-spin h-8 w-8 text-[#144A92]" />
              </div>
            ) : jobPositions && jobPositions.length > 0 ? (
              <div className="space-y-6">
                {jobPositions.map((position) => (
                  <Card
                    key={position.id}
                    className="group rounded-xl border border-black/[0.06] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-[#144A92]/20 bg-white overflow-hidden"
                    onClick={() => setSelectedPosition(position)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#144A92]/40" />
                          <h3 className="text-xl font-bold text-black group-hover:text-[#144A92] transition-colors">
                            {position.title}
                          </h3>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-semibold text-[#424242] bg-[#f8f8f8] px-3 py-1 rounded-full border border-black/[0.06]">
                          {DIVISION_VALUES[position.category as DivisionKey] || position.category}
                        </span>
                      </div>

                      <p className="text-[#424242] leading-relaxed mb-4 border-b border-black/[0.04] pb-4">
                        {position.detail}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-sm font-medium text-[#424242]/60">
                          <span className="flex items-center italic">
                            Status: <span className="ml-1 text-black not-italic">{position.status}</span>
                          </span>
                        </div>

                        <button className="text-[#144C94] text-sm font-bold flex items-center group-hover:underline">
                          View Details <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-[#424242]">
                <p>No open positions at the moment. Check back soon!</p>
              </div>
            )}

            <div className="mt-12 p-8 bg-[#f8f8f8] rounded-xl">
              <h3 className="text-xl font-bold text-black mb-4">Why Metropolitan?</h3>
              <ul className="space-y-3">
                {["Competitive salary and benefits", "Global mobility opportunities", "Professional development programs", "Inclusive and diverse culture"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#424242]">
                    <div className="w-2 h-2 rounded-full bg-[#144A92]/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div>
            <SectionHeaderSmall title="Apply Now" />
            <Card className="rounded-xl border border-black/[0.06] shadow-sm">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position Applying For</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Senior Structural Engineer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="portfolioUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Portfolio URL (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/..." {...field} value={field.value || ''} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Letter</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us why you're a good fit..."
                              className="min-h-[150px]"
                              {...field}
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Resume PDF Upload */}
                    <div className="space-y-2">
                      <FormLabel>Upload CV / Resume (PDF)</FormLabel>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="application/pdf"
                        onChange={handleResumeUpload}
                        className="hidden"
                      />
                      {!resumeFile ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full"
                        >
                          <FileUp className="mr-2 h-4 w-4" />
                          Upload PDF
                        </Button>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-[#f8f8f8] rounded-lg border border-black/[0.06]">
                          <div className="flex items-center gap-2 text-sm">
                            <FileUp className="h-4 w-4 text-[#144A92]" />
                            <span className="font-medium truncate max-w-[200px]">{resumeFileName}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={removeResume}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-lg bg-[#144A92] text-white hover:shadow-md hover:scale-[1.03] rounded-lg font-semibold transition-all"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? <Loader2 className="animate-spin" /> : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* Job Position Detail Popup */}
      <Dialog open={selectedPosition !== null} onOpenChange={(open) => !open && setSelectedPosition(null)}>
        {selectedPosition && (
          <DialogContent className="w-full max-w-5xl p-0 bg-white h-auto lg:h-[80vh] overflow-hidden">
            <div className="flex flex-col lg:flex-row h-auto lg:h-full">

              {/* Left Side - Content */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedPosition.title}</DialogTitle>
                </DialogHeader>

                <div className="flex items-center gap-2 mt-4 mb-4 flex-wrap">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#424242] bg-[#f8f8f8] px-3 py-1 rounded-full border border-black/[0.06]">
                    {DIVISION_VALUES[selectedPosition.category as DivisionKey] || selectedPosition.category}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedPosition.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                    }`}>
                    {selectedPosition.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-[#424242]">Details</h4>
                    <p className="text-[#424242] leading-relaxed whitespace-pre-wrap">{selectedPosition.detail}</p>
                  </div>

                  {selectedPosition.information && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-[#424242]">Additional Information</h4>
                      <p className="text-[#424242] leading-relaxed whitespace-pre-wrap">{selectedPosition.information}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Image */}
              {selectedPosition.image && (
                <div className="w-full lg:w-1/2 bg-gray-100 relative flex items-center justify-center p-4 lg:p-0">
                  <img
                    src={selectedPosition.image}
                    alt={selectedPosition.title}
                    className="object-contain w-full max-h-[40vh] lg:max-h-full rounded-lg"
                  />
                  <a
                    href={selectedPosition.image}
                    download={`${selectedPosition.title}.jpg`}
                    className="absolute top-4 right-12 bg-white shadow px-3 py-1 rounded flex items-center gap-1 hover:bg-gray-50 transition text-xs lg:text-sm"
                  >
                    <Download className="h-4 w-4" /> Download
                  </a>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>


      <Footer />
    </div>
  );
}
