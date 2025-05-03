import { z } from 'zod';

export const createSoftSkillValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Soft skill name is required' }),
  }),
});

export const SoftSkillValidationSchema = {
      createSoftSkillValidationSchema,
};
