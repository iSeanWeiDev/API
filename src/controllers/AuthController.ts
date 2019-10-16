import { Request, Response } from 'express';
import { Controller, Post, Put } from '@overnightjs/core';
// import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/auth')
export class AuthController {
  @Post('register')
  public registerAccount(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Register',
    });
  }

  @Post('login')
  public loginUser(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Login User',
    });
  }

  @Post('password/forgot')
  public forgotPassword(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Forgot Password',
    });
  }

  @Put('password/reset')
  public resetPassword(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Reset Password',
    });
  }

  @Post('verify')
  public verifyAccount(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Verify Account',
    });
  }
}
