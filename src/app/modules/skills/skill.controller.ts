import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skill.service';
import { StatusCodes } from 'http-status-codes';
// skill controller
const createSkillController = catchAsynch(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

export const SkillController = {
  createSkillController,
};
