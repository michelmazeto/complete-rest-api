import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './updateUserAvatarUseCase';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;

    const avatar_file = null;

    const updateAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateAvatarUseCase.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
