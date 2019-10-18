import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
// import { Logger } from '@overnightjs/logger';
import { DirectMessage } from '../../models/DirectMessage';

@Controller('api/v1/bots')
export class BotDMController {
  @Get(':botid/dms')
  public getFilters(req: Request, res: Response) {
    DirectMessage.findAll({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Get Bot Direct Message',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Post(':botid/dms')
  public addFilter(req: Request, res: Response) {
    DirectMessage.create(req.body)
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Add Direct Message',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Put(':botid/dms/:dmid')
  public updateFilter(req: Request, res: Response) {
    DirectMessage.update(req.body, {
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'update Direct Message',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Delete(':botid/dms/:dmid')
  public deleteFilter(req: Request, res: Response) {
    DirectMessage.destroy({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Delete bot Direct Message',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
