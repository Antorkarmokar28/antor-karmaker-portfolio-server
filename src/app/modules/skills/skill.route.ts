import { Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { SkillValidationSchema } from './skill.validation';
import { SkillController } from './skill.controller';

const router = Router();
router.post(
  '/create-skill',
  validationRequest(SkillValidationSchema.createSkillValidationSchema),
  SkillController.createSkillController
);
// router.post('/');

export const skillRouter = router;
