// validations/project.validation.ts

import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    image: z
      .string({
        required_error: 'Image must be required',
      })
      .trim(),
    title: z
      .string({
        required_error: 'Project title is required',
        invalid_type_error: 'Title must be a string',
      })
      .trim()
      .min(1, 'Title cannot be empty'),

    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .trim()
      .min(1, 'Description cannot be empty'),

    frontendLiveLink: z.string().optional(),

    backendLiveLink: z.string().optional(),

    githubFrontendLink: z.string().optional(),

    githubBackendLink: z.string().optional(),
  }),
});

export const ProjectValidationSchema = {
  createProjectValidationSchema,
};
