import { Router } from 'express';
import { skillRouter } from '../modules/skills/skill.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/skills',
    route: skillRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
