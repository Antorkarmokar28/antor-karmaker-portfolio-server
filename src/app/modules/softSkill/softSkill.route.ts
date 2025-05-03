import { Router } from 'express';

import validationRequest from '../../middlewares/validationRequest';
import { SoftSkillValidationSchema } from './softskill.validation';
import { SoftSkillController } from './softskill.controller';

const router = Router();
router.post(
  '/create-soft-skill',
  validationRequest(SoftSkillValidationSchema.createSoftSkillValidationSchema),
  SoftSkillController.createSoftSkill
);
router.get('/', SoftSkillController.getAllSoftSkill);

export const softSkillRouter = router;
