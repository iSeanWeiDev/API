import {Request, Response, NextFunction} from 'express';
import { Controller, Middleware, Get, Put, Post, Delete} from '@overnightjs/core';
import {Logger} from '@overnightjs/logger';

@Controller('api/v1/tickets')
export class TicketController {
    @Get('')
    private getAllTickets(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get all Tickets',
        });
    }

    @Post('')
    private createTicket(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Create new Ticket',
        });
    }

    @Get(':ticketid')
    private getTicketByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get Tickets by TicketID',
        });
    }

    @Put(':ticketid')
    private updateTicket(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Update the Ticket by id',
        });
    }

    @Delete(':ticketid')
    private deleteTicketByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete ticket by id',
        });
    }
}
