import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/bots')
export class BotFUMController {
  @Get(':botid/fums')
  public getFilters(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot FUM',
    });
  }

  @Post(':botid/fums')
  public addFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Add FUM',
    });
  }

  @Put(':botid/fums/:fumid')
  public updateFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'update FUM',
    });
  }

  @Delete(':botid/fums/:fumid')
  public deleteFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete bot FUM',
    });
  }
}
