import { Request, Response } from 'express';
import { Controller, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/bots')
export class BotController {
  @Post('')
  public createBot(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Create bot',
    });
  }
}
