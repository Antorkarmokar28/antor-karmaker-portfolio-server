import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SoftSkillService } from './softskill.service';

const createSoftSkill = catchAsynch(async (req, res) => {
  const result = await SoftSkillService.creatSoftSkillInToDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Soft skill created successfully',
    data: result,
  });
});

const getAllSoftSkill = catchAsynch(async (req, res) => {
  const result = await SoftSkillService.getAllSoftSkillFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Soft skill retrived successfully',
    data: result,
  });
});

export const SoftSkillController = {
  createSoftSkill,
  getAllSoftSkill,
};
