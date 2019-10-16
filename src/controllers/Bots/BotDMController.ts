import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/bots')
export class BotDMController {
  @Get(':botid/dms')
  public getFilters(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot Direct Message',
    });
  }

  @Post(':botid/dms')
  public addFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Add Direct Message',
    });
  }

  @Put(':botid/dms/:dmid')
  public updateFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'update Direct Message',
    });
  }

  @Delete(':botid/dms/:dmid')
  public deleteFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete bot Direct Message',
    });
  }
}
