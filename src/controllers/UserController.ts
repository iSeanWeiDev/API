import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/users')
export class UserController {
  @Get(':userid')
  public getAccountDeail(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot Detail by ID',
    });
  }

  @Put(':userid')
  public updateAccount(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Update bot by ID',
    });
  }

  @Delete(':userid')
  public closeAccountByID(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete bot by id',
    });
  }
}
