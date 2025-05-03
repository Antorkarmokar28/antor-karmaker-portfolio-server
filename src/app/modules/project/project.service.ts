/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageCloudinary } from '../../utils/fileUploads';
import { IProject } from './project.interface';
import { Project } from './project.model';

const createProjectInToDB = async (file: any, payload: IProject) => {
  // storage image into cloudinary
  const imageName = payload?.title;
  const path = file?.path;
  const { secure_url }: any = await sendImageCloudinary(imageName, path);
  payload.image = secure_url;
  const result = await Project.create(payload);
  return result;
};

const getAllProjectFromDB = async () => {
  const result = await Project.find();
  return result;
};

export const ProjectService = {
  createProjectInToDB,
  getAllProjectFromDB,
};
