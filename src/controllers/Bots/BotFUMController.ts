import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
// import { Logger } from '@overnightjs/logger';
import { FollowUpMessage } from '../../models/FollowUpMessage';

@Controller('api/v1/bots')
export class BotFUMController {
  @Get(':botid/fums')
  public getFilters(req: Request, res: Response) {
    FollowUpMessage.findAll({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Get Bot FUM',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Post(':botid/fums')
  public addFilter(req: Request, res: Response) {
    FollowUpMessage.create(req.body)
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Add FUM',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Put(':botid/fums/:fumid')
  public updateFilter(req: Request, res: Response) {
    FollowUpMessage.update(req.body, {
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'update FUM',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Delete(':botid/fums/:fumid')
  public deleteFilter(req: Request, res: Response) {
    FollowUpMessage.destroy({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Delete bot FUM',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
