import {Request, Response} from "express";

/**
 * @file Declares API for Likes related controller methods
 */
export default interface TagControllerI {
    createTag(req: Request, res: Response): void;
    deleteTag(req: Request, res: Response): void;
    findAllTags(req: Request, res: Response): void;
    findTagByText(req: Request, res: Response): void;
    updateTag(req: Request, res: Response): void;
};