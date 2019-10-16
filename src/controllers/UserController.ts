import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/users')
export class UserController {
  @Get(':userid')
  private getAccountDeail(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot Detail by ID',
    });
  }

  @Put(':userid')
  private updateAccount(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Update bot by ID',
    });
  }

  @Delete(':userid')
  private closeAccountByID(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete bot by id',
    });
  }
}
