import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/payments')
export class PaymentController {
  @Get('')
  public getPaymentList(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get all Payments list',
    });
  }

  @Post(':paymentid')
  public addPayment(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Add payment',
    });
  }

  @Put(':paymentid')
  public updatePayment(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Update payments for user',
    });
  }

  @Delete(':paymentid')
  public closePayment(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Close payment for account',
    });
  }
}
