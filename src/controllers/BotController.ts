import {Request, Response, NextFunction} from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import {Logger} from '@overnightjs/logger';

@Controller('api/v1/bots')
export class BotController {
    @Post('')
    private createBot(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Create Bot',
        });
    }

    @Get('')
    private getAllBotsList(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get all bots list',
        });
    }

    // Bot management end-points
    @Get(':botid')
    private getBotDeail(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get Bot Detail by ID',
        });
    }

    @Put(':botid')
    private updateBotStatus(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Update bot Status START || PAUSE || STOP',
        });
    }

    @Delete(':botid')
    private deleteBotByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete bot by id',
        });
    }

    // Filter management
    @Get(':botid/filters')
    private getFilterList(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get filter by id',
        });
    }

    @Post(':botid/filters')
    private addFilter(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Create Filters',
        });
    }

    @Put(':botid/filters/:filterid')
    private updateFilterByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Update Filters by filter id',
        });
    }

    @Delete(':botid/filters/:filterid')
    private deleteFilterByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete filter by id',
        });
    }

    // Comment management end-points
    @Get(':botid/comments')
    private getCommentList(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get filter list by bot id',
        });
    }

    @Post(':botid/comments')
    private addComment(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Add Comment by bot id',
        });
    }

    @Put(':botid/comments/:commentid')
    private updateCommentByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete filter by id with bot id',
        });
    }

    @Delete(':botid/comments/:commentid')
    private deleteCommentByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete filter by id with bot id',
        });
    }

    // Direct Message Management end-points
    @Get(':botid/dms')
    private getDirectMessageList(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get Direct message list',
        });
    }

    @Post(':botid/dms')
    private addDirectMessage(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Add Direct mesage by bot id',
        });
    }

    @Put(':botid/dms/:dmid')
    private updateDirectMessageByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'update Direct message by id',
        });
    }

    @Delete(':botid/dms/:dmid')
    private deleteDirectMessageByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete Direct message by id',
        });
    }

    // Follow up message bot management by id
    @Get(':botid/fums')
    private getFollowUpMessageList(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get Follow up message list',
        });
    }

    @Post(':botid/fums')
    private addFollowUpMessage(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Add follow up mesage by bot id',
        });
    }

    @Put(':botid/fums/:fumid')
    private updateFollowUpMessageByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete follow up message by id',
        });
    }

    @Delete(':botid/fums/:fumid')
    private deleteFollowUpMessageByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete follow up message by id',
        });
    }

    // Setting management end-points
    @Get(':botid/settings')
    private getSettingList(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get Bot Setting list',
        });
    }

    @Post(':botid/settings')
    private addSetting(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Add follow up mesage by bot id',
        });
    }

    @Put(':botid/settings')
    private updateSetting(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Update Setting by ID',
        });
    }

    @Get(':botid/plans')
    private getAllPlans(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Get Bot plans list',
        });
    }

    // Plan management end-points
    @Post(':botid/plans')
    private addPlans(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Add plans by bot id',
        });
    }

    @Put(':botid/plans/:planid')
    private updatePlanByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Update Plan by ID',
        });
    }

    @Put(':botid/plans/:planid')
    private updatePlanById(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'update the plan by id',
        });
    }

    @Delete(':botid/plans/:planid')
    private deletePlanByID(req: Request, res: Response) {
        Logger.Info(req.body);
        res.status(200).json({
            message: 'Delete plan by id',
        });
    }
}
