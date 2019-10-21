import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
// import { Logger } from '@overnightjs/logger';
import { DirectMessage } from '../../models/DirectMessage';

@Controller('api/v1/bots')
export class BotDMController {
  @Get(':botid/dms')
  public getDirectMessages(req: Request, res: Response) {
    DirectMessage.findAll({
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

  @Post(':botid/dms')
  public addDirectMessage(req: Request, res: Response) {
    const saveData: any = {
      botID: req.params.botid,
      text: req.body.text,
    };

    DirectMessage.create(saveData)
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

  @Put(':botid/dms/:dmid')
  public updateDirectMessage(req: Request, res: Response) {
    DirectMessage.update(req.body, {
      where: {
        id: req.params.dmid,
        botID: req.params.botid,
      },
    })
      .then(result => {
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Updated the Direct Message',
          });
        } else {
          res.status(200).json({
            flag: false,
            message: 'Not available to update right now.',
          });
        }
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Delete(':botid/dms/:dmid')
  public deleteDirectMessage(req: Request, res: Response) {
    DirectMessage.destroy({
      where: {
        id: req.params.dmid,
        botID: req.params.botid,
      },
    })
      .then(result => {
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Deleted the Direct message',
          });
        } else {
          res.status(200).json({
            flag: false,
            message: 'Not available to delete right now.',
          });
        }
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
