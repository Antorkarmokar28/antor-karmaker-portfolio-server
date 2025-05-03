import mongoose, { model } from 'mongoose';
import { IProject } from './project.interface';

const projectSchema = new mongoose.Schema<IProject>(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    frontendLiveLink: {
      type: String,
      required: false,
    },
    backendLiveLink: {
      type: String,
      required: false,
    },
    githubFrontendLink: {
      type: String,
      required: false,
    },
    githubBackendLink: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Project = model<IProject>('Projects', projectSchema);
