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
        deletedAt: null,
      },
    })
      .then(result => {
        if (result !== null) {
          const responseData: any[] = [];
          result.forEach(item => {
            responseData.push(item.get());
          });

          res.status(200).json({
            flag: true,
            data: responseData,
          });
        } else {
          res.status(200).json({
            flag: true,
            data: null,
          });
        }
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Post(':botid/filters')
  public addFilter(req: Request, res: Response) {
    const saveData: any = {
      botID: req.params.botid,
      text: req.body.text,
    };

    Filter.create(saveData)
      .then(result => {
        res.status(200).json({
          flag: true,
          data: result.getDataValue('id'),
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
        id: req.params.filterid,
        botID: req.params.botid,
      },
    })
      .then(result => {
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Updated the filter',
          });
        } else {
          res.status(200).json({
            flag: false,
            message: 'Not availabel to update right now.',
          });
        }
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
        id: req.params.filterid,
        botID: req.params.botid,
      },
    })
      .then(result => {
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Deleted the filter',
          });
        } else {
          res.status(200).json({
            flag: false,
            message: 'Not availabel to delete right now.',
          });
        }
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
