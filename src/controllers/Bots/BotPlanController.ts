import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
import { Plan } from '../../models/Plan';

@Controller('api/v1/bots')
export class BotPlanController {
  @Get(':botid/plans')
  public getFilters(req: Request, res: Response) {
    Plan.findAll({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Get Bot Plan',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Post(':botid/plans')
  public addFilter(req: Request, res: Response) {
    Plan.create(req.body)
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Add Plan',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Put(':botid/plans/:planid')
  public updateFilter(req: Request, res: Response) {
    Plan.update(req.body, {
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'update Plan',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Delete(':botid/plans/:planid')
  public deleteFilter(req: Request, res: Response) {
    Plan.destroy({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Delete bot Plan',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
