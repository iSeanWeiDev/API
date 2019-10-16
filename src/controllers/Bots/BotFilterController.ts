import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/bots')
export class BotFilterController {
  @Get(':botid/filters')
  public getFilters(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot Filters',
    });
  }

  @Post(':botid/filters')
  public addFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Add Filter',
    });
  }

  @Put(':botid/filters/:filterid')
  public updateFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'update filter',
    });
  }

  @Delete(':botid/filters/:filterid')
  public deleteFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete bot filter',
    });
  }
}
