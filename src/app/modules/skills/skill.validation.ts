// validations/skill.validation.ts

import { z } from 'zod';

export const createSkillValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Skill name is required',
        invalid_type_error: 'Skill name must be a string',
      })
      .trim()
      .min(1, 'Skill name cannot be empty'),

    desc: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .trim()
      .min(1, 'Description cannot be empty'),
  }),
});

export const SkillValidationSchema = {
  createSkillValidationSchema,
};
