import { ISoftSkill } from './softskil.interface';
import { SoftSkill } from './softskill.model';

const creatSoftSkillInToDB = async (payload: ISoftSkill) => {
  const result = await SoftSkill.create(payload);
  return result;
};

const getAllSoftSkillFromDB = async () => {
  const result = await SoftSkill.find();
  return result;
};

export const SoftSkillService = {
  creatSoftSkillInToDB,
  getAllSoftSkillFromDB,
};
