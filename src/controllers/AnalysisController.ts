import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/analysis')
export class AnalysisController {
  @Get('dialogs')
  public getAllDialogs(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get all dialogs for analysis',
    });
  }

  @Get('dialogs/:clientid')
  public getDialogByID(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get dialog by id',
    });
  }

  @Get('stats')
  public getStats(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get all stats by user id',
    });
  }
}
