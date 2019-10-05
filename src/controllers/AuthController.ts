import {Request, Response, NextFunction} from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import {Logger} from '@overnightjs/logger';

@Controller('api/v1/auth')
export class AuthController {
    @Post('register')
    private registerAccount(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Register',
        });
    }

    @Post('login')
    private loginUser(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Login User',
        });
    }

    @Post('password/forgot')
    private forgotPassword(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Forgot Password',
        });
    }

    @Put('password/reset')
    private resetPassword(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Reset Password',
        });
    }

    @Post('verify')
    private verifyAccount(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Verify Account',
        });
    }
}
