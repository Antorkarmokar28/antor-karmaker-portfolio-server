import { NextFunction, Request, Response, Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { SkillValidationSchema } from './skill.validation';
import { SkillController } from './skill.controller';
import { upload } from '../../utils/fileUploads';

const router = Router();
router.post(
  '/create-skill',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validationRequest(SkillValidationSchema.createSkillValidationSchema),
  SkillController.createSkillController
);
router.get('/', SkillController.getAllSkillController);

export const skillRouter = router;
