import { Router } from 'express';
import { skillRouter } from '../modules/skills/skill.route';
import { softSkillRouter } from '../modules/softSkill/softSkill.route';

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
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
