import {Request, Response} from "express";

/**
 * @file LikeController interface Represents web services for like resource
 */
 export default interface LikeControllerI {
    findAllUsersThatLikedTuit (req: Request, res: Response): void;
    findAllTuitsLikedByUser (req: Request, res: Response): void;
    findUserLikedTuit (req: Request, res: Response): void;
    userTogglesTuitLikes (req: Request, res: Response): void;
};