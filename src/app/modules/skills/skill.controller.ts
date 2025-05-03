import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skill.service';
import { StatusCodes } from 'http-status-codes';
// create skill controller
const createSkillController = catchAsynch(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.file, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});
// get all skill controller
const getAllSkillController = catchAsynch(async (req, res) => {
  const result = await SkillService.getAllSkillFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill retrived successfully',
    data: result,
  });
});

export const SkillController = {
  createSkillController,
  getAllSkillController,
};
