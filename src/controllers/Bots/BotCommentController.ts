import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/bots')
export class BotCommentController {
  @Get(':botid/comments')
  public getFilters(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot Comments',
    });
  }

  @Post(':botid/comments')
  public addFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Add Comments',
    });
  }

  @Put(':botid/comments/:commentsid')
  public updateFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'update Comments',
    });
  }

  @Delete(':botid/comments/:commentsid')
  public deleteFilter(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete bot Comments',
    });
  }
}
