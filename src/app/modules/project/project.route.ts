import { NextFunction, Request, Response, Router } from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { ProjectValidationSchema } from './project.validation';
import { upload } from '../../utils/fileUploads';
import { ProjectController } from './project.controller';

const router = Router();
router.post(
  '/create-project',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validationRequest(ProjectValidationSchema.createProjectValidationSchema),
  ProjectController.createProjectController
);
router.get('/', ProjectController.getAllProjectController);

export const projectRouter = router;
