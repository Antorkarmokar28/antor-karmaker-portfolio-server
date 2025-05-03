import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectService } from './project.service';

// create project controller
const createProjectController = catchAsynch(async (req, res) => {
  const result = await ProjectService.createProjectInToDB(req.file, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Project created is successfully',
    data: result,
  });
});

// get all project controller
const getAllProjectController = catchAsynch(async (req, res) => {
  const result = await ProjectService.getAllProjectFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project retrived is successfully',
    data: result,
  });
});

export const ProjectController = {
  createProjectController,
  getAllProjectController,
};
