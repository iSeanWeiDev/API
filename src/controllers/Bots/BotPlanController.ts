import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/bots')
export class BotPlanController {
  @Get(':botid/plans')
  public getFilters(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot Plan',
    });
  }

  @Post(':botid/plans')
  public addFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Add Plan',
    });
  }

  @Put(':botid/plans/:planid')
  public updateFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'update Plan',
    });
  }

  @Delete(':botid/plans/:planid')
  public deleteFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete bot Plan',
    });
  }
}
