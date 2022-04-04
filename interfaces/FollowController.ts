import {Request, Response} from "express";

/**
 * @file FollowController interface Represents web services for follow resources
 */
export default interface FollowControllerI {
    findAllUsersThatUserFollows (req: Request, res: Response): void;
    findAllFollowersOfUsers (req: Request, res: Response): void;
    userFollowsUser (req: Request, res: Response): void;
    userUnfollowsUser (req: Request, res: Response): void;
};