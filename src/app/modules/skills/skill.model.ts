import mongoose, { model } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new mongoose.Schema<TSkill>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Skill = model<TSkill>('Skill', skillSchema);
