import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/bots')
export class BotController {
  @Get('')
  public getBotList(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot List',
    });
  }

  @Post('')
  public createBot(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Create bot',
    });
  }

  @Get(':botid')
  public getBotDetail(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot Detail by BotID',
    });
  }

  @Put(':botid')
  public updateBot(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Update the Bot Detail by BotID',
    });
  }

  @Delete(':botid')
  public deleteBot(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete the Bot Detail by BotID',
    });
  }
}
