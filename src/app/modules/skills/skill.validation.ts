// validations/skill.validation.ts

import { z } from 'zod';

export const createSkillValidationSchema = z.object({
  body: z.object({
    image: z.string({ required_error: 'Image is required' }),
    name: z.string({ required_error: 'Skill name is required' }),
    desc: z.string({ required_error: 'Description is required' }),
  }),
});

export const SkillValidationSchema = {
  createSkillValidationSchema,
};
