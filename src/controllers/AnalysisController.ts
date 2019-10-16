import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/analysis')
export class AnalysisController {
  @Get('dialogs')
  private getAllDialogs(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get all dialogs for analysis',
    });
  }

  @Get('dialogs/:clientid')
  private getDialogByID(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get dialog by id',
    });
  }

  @Get('stats')
  private getStats(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get all stats by user id',
    });
  }
}
