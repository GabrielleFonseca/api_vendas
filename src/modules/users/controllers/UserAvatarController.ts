import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import AppError from '@shared/errors/appError';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    if (!request.file) {
      throw new AppError('No file provided', 400);
    }

    const user = updateAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.json(user);
  }
}
