import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
// import { Logger } from '@overnightjs/logger';
import { Comment } from '../../models/Comment';

@Controller('api/v1/bots')
export class BotCommentController {
  @Get(':botid/comments')
  public getFilters(req: Request, res: Response) {
    Comment.findAll({
      where: {
        botiID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Get Bot Comments',
        });
        // tslint:disable-next-line:no-console
        console.log(result);
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Post(':botid/comments')
  public addFilter(req: Request, res: Response) {
    Comment.create(req.body)
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'Add Comments',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Put(':botid/comments/:commentid')
  public updateFilter(req: Request, res: Response) {
    Comment.update(req.body, {
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        // tslint:disable-next-line:no-console
        console.log(result);
        res.status(200).json({
          message: 'update Comments',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }

  @Delete(':botid/comments/:commentid')
  public deleteFilter(req: Request, res: Response) {
    Comment.destroy({
      where: {
        botID: req.params.botid,
      },
    })
      .then(result => {
        res.status(200).json({
          message: 'Delete bot Comments',
        });
      })
      .catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  }
}
