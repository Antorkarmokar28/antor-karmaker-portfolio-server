/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageCloudinary } from '../../utils/fileUploads';
import { TSkill } from './skill.interface';
import { Skill } from './skill.model';

const createSkillIntoDB = async (file: any, payload: TSkill) => {
  // storage image into cloudinary
  const imageName = payload?.name;
  const path = file?.path;
  const { secure_url }: any = await sendImageCloudinary(imageName, path);
  payload.image = secure_url;
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillFromDB = async () => {
  const result = await Skill.find();
  return result;
};

export const SkillService = {
  createSkillIntoDB,
  getAllSkillFromDB,
};

