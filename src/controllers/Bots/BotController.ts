import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Bot } from '../../models/Bot';
// import { BotStatus } from '../../models/BotStatus';

@Controller('api/v1/bots')
export class BotController {
  @Get('')
  public getBotList(req: Request, res: Response) {
    Bot.findAll({
      where: {
        deletedAt: null,
      },
    })
      .then(result => {
        const arrBots: any[] = [];
        result.forEach(item => {
          arrBots.push(item.get());
        });

        res.status(200).json({
          flag: true,
          data: arrBots,
        });
      })
      .catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });
  }

  @Post('')
  public createBot(req: Request, res: Response) {
    Bot.findAll({
      where: {
        accountName: req.body.accountName,
        deletedAt: null,
      },
    })
      .then(result => {
        if (result.length > 0) {
          res.status(200).send({
            flag: false,
            message: 'This account info is already used for a bot.',
          });
        } else {
          Bot.create(req.body)
            .then(bot => {
              if (bot.getDataValue('id') > 0) {
                res.status(200).json({
                  flag: true,
                  botid: bot.getDataValue('id'),
                });
              } else {
                res.status(500).json({
                  flag: false,
                  botid: bot.getDataValue('id'),
                });
              }
            })
            .catch(error => {
              // tslint:disable-next-line:no-console
              console.log(error);
            });
        }
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
        deletedAt: null,
      },
    })
      .then(result => {
        if (result !== null) {
          res.status(200).json({
            flag: true,
            data: result.get(),
          });
        } else {
          res.status(200).json({
            flag: false,
            data: null,
          });
        }
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
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Updated your bot.',
          });
        } else {
          res.status(200).json({
            flag: false,
            message: 'Server connection error',
          });
        }
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
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Deleted your bot.',
          });
        } else {
          res.status(200).json({
            flag: false,
            message: 'Server connection error',
          });
        }
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
