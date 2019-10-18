import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Bot } from '../../models/Bot';
// import { BotStatus } from '../../models/BotStatus';

@Controller('api/v1/bots')
export class BotController {
  @Get('')
  public getBotList(req: Request, res: Response) {
    Logger.Info(req.body);
    res.status(200).json({
      message: 'Get Bot List',
    });

    Bot.findAll()
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
      })
      .catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });
  }

  @Post('')
  public createBot(req: Request, res: Response) {
    Bot.create(req.body)
      .then(result => {
        if (result.getDataValue('id') > 0) {
          res.status(200).json({
            botid: result.getDataValue('id'),
            message: 'Create bot',
          });
        } else {
          res.status(500).json({
            botid: result.getDataValue('id'),
            message: 'Create bot',
          });
        }
        // tslint:disable-next-line:no-console
        console.log(result.getDataValue('id'));
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Get(':botid')
  public getBotDetail(req: Request, res: Response) {
    Bot.findOne({
      where: {
        id: req.params.botid,
      },
    })
      .then(result => {
        res.status(200).json({
          message: 'Get Bot Detail by BotID',
        });
        // tslint:disable-next-line:no-console
        console.log(result.get());
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Put(':botid')
  public updateBot(req: Request, res: Response) {
    Bot.update(req.body, {
      where: {
        id: req.params.botid,
      },
    })
      .then(result => {
        res.status(200).json({
          message: 'Update the Bot Detail by BotID',
        });
        // tslint:disable-next-line:no-console
        console.log(result);
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Delete(':botid')
  public deleteBot(req: Request, res: Response) {
    Bot.destroy({
      where: {
        id: req.params.botid,
      },
    })
      .then(result => {
        res.status(200).json({
          message: 'Delete the Bot Detail by BotID',
        });
        // tslint:disable-next-line:no-console
        console.log(result);
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
