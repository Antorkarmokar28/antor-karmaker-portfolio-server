import mongoose, { model } from 'mongoose';
import { ISoftSkill } from './softskil.interface';

const createSoftSkillSchema = new mongoose.Schema<ISoftSkill>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const SoftSkill = model<ISoftSkill>('SoftSkill', createSoftSkillSchema);
