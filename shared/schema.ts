import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  division: varchar("division", { length: 50 }).notNull(), // One of the 7 divisions
  client: text("client"),
  location: text("location"),
  completionDate: text("completion_date"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(), // HTML or markdown content
  image: text("image").notNull(),
  summary: text("summary").notNull(),
  date: timestamp("date").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  division: varchar("division", { length: 50 }), // Optional: if inquiry is specific to a division
  createdAt: timestamp("created_at").defaultNow(),
});

export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  position: text("position").notNull(),
  portfolioUrl: text("portfolio_url"),
  coverLetter: text("cover_letter"),
  resumePdf: text("resume_pdf"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const jobPositions = pgTable("job_positions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  detail: text("detail").notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  information: text("information"),
  status: varchar("status", { length: 50 }).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  role: text("role").notNull(),
  division: varchar("division", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// === SCHEMAS ===

export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({ id: true, createdAt: true });
export const insertNewsSchema = createInsertSchema(news).omit({ id: true, createdAt: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export const insertJobApplicationSchema = createInsertSchema(jobApplications).omit({ id: true, createdAt: true });
export const insertJobPositionSchema = createInsertSchema(jobPositions).omit({ id: true, createdAt: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true, createdAt: true });

// === EXPLICIT API TYPES ===

export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;

export type NewsItem = typeof news.$inferSelect;
export type InsertNews = z.infer<typeof insertNewsSchema>;

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type JobApplication = typeof jobApplications.$inferSelect;
export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;

export type JobPosition = typeof jobPositions.$inferSelect;
export type InsertJobPosition = z.infer<typeof insertJobPositionSchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

// === DIVISION ENUMS (for API calls) ===
export const DIVISION_VALUES = {
  ELV: "ELV",
  CENTRAL_AC: "Central AC",
  FIRE_PROTECTION: "Fire Detection & Protection",
  ELEVATORS: "Elevators and Travelators",
  GENERATOR: "Generator",
  SOLAR: "Solar",
} as const;

export type DivisionKey = keyof typeof DIVISION_VALUES;

// === DISPLAY NAMES (for UI) ===
export const DIVISIONS: DivisionKey[] = [
  "ELV",
  "CENTRAL_AC",
  "FIRE_PROTECTION",
  "ELEVATORS",
  "GENERATOR",
  "SOLAR",
];

// Helper to get display name from division key
export function getDivisionDisplayName(key: DivisionKey): string {
  return DIVISION_VALUES[key];
}

// Helper to get division key from display name (for backward compatibility)
export function getDivisionKeyFromDisplayName(displayName: string): DivisionKey | undefined {
  return Object.entries(DIVISION_VALUES).find(([_, value]) => value === displayName)?.[0] as DivisionKey;
}
