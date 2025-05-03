import { Router } from 'express';
import { skillRouter } from '../modules/skills/skill.route';
import { softSkillRouter } from '../modules/softSkill/softSkill.route';
import { projectRouter } from '../modules/project/project.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/skills',
    route: skillRouter,
  },
  {
    path: '/soft-skills',
    route: softSkillRouter,
  },
  {
    path: '/projects',
    route: projectRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
