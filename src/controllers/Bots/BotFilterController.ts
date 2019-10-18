import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
// import { Logger } from '@overnightjs/logger';
import { Filter } from '../../models/Filter';

@Controller('api/v1/bots')
export class BotFilterController {
  @Get(':botid/filters')
  public getFilters(req: Request, res: Response) {
    Filter.findAll({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Get Bot Filters',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Post(':botid/filters')
  public addFilter(req: Request, res: Response) {
    Filter.create(req.body)
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Add Filter',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Put(':botid/filters/:filterid')
  public updateFilter(req: Request, res: Response) {
    Filter.update(req.body, {
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'update filter',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Delete(':botid/filters/:filterid')
  public deleteFilter(req: Request, res: Response) {
    Filter.destroy({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Delete bot filter',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
