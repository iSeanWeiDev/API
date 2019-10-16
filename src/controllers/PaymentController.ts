import { Request, Response, NextFunction } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/payments')
export class PaymentController {
  @Get('')
  private getPaymentList(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get all Payments list',
    });
  }

  @Post(':paymentid')
  private addPayment(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Add payment',
    });
  }

  @Put(':paymentid')
  private updatePayment(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Update payments for user',
    });
  }

  @Delete(':paymentid')
  private closePayment(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Close payment for account',
    });
  }
}
