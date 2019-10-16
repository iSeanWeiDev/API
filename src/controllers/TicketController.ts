import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/v1/tickets')
export class TicketController {
  @Get('')
  public getAllTickets(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get all Tickets',
    });
  }

  @Post('')
  public createTicket(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Create new Ticket',
    });
  }

  @Get(':ticketid')
  public getTicketByID(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Tickets by TicketID',
    });
  }

  @Put(':ticketid')
  public updateTicket(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Update the Ticket by id',
    });
  }

  @Delete(':ticketid')
  public deleteTicketByID(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Delete ticket by id',
    });
  }
}
