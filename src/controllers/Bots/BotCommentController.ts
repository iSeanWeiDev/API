import { Request, Response } from 'express';
import { Controller, Post, Get, Put, Delete } from '@overnightjs/core';
// import { Logger } from '@overnightjs/logger';
import { Comment } from '../../models/Comment';

@Controller('api/v1/bots')
export class BotCommentController {
  @Get(':botid/comments')
  public getComments(req: Request, res: Response) {
    Comment.findAll({
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

  @Post(':botid/comments')
  public addComment(req: Request, res: Response) {
    const saveData: any = {
      botID: req.params.botid,
      text: req.body.text,
    };

    Comment.create(saveData)
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

  @Put(':botid/comments/:commentid')
  public updateComment(req: Request, res: Response) {
    Comment.update(req.body, {
      where: {
        id: req.params.commentid,
        botID: req.params.botid,
      },
    })
      .then(result => {
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Updated the comment text.',
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

  @Delete(':botid/comments/:commentid')
  public deleteComment(req: Request, res: Response) {
    Comment.destroy({
      where: {
        id: req.params.commentid,
        botID: req.params.botid,
      },
    })
      .then(result => {
        if (result[0] === 1) {
          res.status(200).json({
            flag: true,
            message: 'Deleted the comment text',
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
