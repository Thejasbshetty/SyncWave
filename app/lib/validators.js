import { z } from "zod";

export const projectSchema = z.object({
  name: z
    .string()
    .min(3, "Project name is required and it should be atleast 3 character")
    .max(100, "Project name must be 100 charactersor less"),
  key: z
    .string()
    .min(2, "Project key is required and it should be atleast 2 character")
    .max(10, "Project key must be 10 charactersor less"),
  description: z
    .string()
    .max(255, "Description must be 255 characters or less")
    .optional(),
});

export const sprintSchema = z.object({
  name: z.string().min(1, "Sprint name is required"),
  startDate: z.date(),
  endDate: z.date(),
});

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required"),
  assigneeId: z.string().cuid("Please select assignee"),
  description: z.string().optional(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]),
});
