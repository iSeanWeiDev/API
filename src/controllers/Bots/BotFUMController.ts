import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
// import { Logger } from '@overnightjs/logger';
import { FollowUpMessage } from '../../models/FollowUpMessage';

@Controller('api/v1/bots')
export class BotFUMController {
  @Get(':botid/fums')
  public getFUMs(req: Request, res: Response) {
    FollowUpMessage.findAll({
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

  @Post(':botid/fums')
  public addFUM(req: Request, res: Response) {
    const saveData: any = {
      botID: req.params.botid,
      text: req.body.text,
      dateTime: new Date(req.body.dateTime),
    };

    FollowUpMessage.create(saveData)
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

  @Put(':botid/fums/:fumid')
  public updateFUM(req: Request, res: Response) {
    FollowUpMessage.update(req.body, {
      where: {
        id: req.params.fumid,
        botID: req.params.botid,
      },
    })
      .then(result => {
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Updated the follow up message',
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

  @Delete(':botid/fums/:fumid')
  public deleteFUM(req: Request, res: Response) {
    FollowUpMessage.destroy({
      where: {
        id: req.params.fumid,
        botID: req.params.botid,
      },
    })
      .then(result => {
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Deleted the follow up message',
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
