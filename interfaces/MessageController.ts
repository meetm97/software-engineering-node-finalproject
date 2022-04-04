import {Request, Response} from "express";

/**
 * @file MessageController interface Represents web services for message resources
 */
export default interface MessageControllerI {
    findAllMessagesSentByUser (req: Request, res: Response): void;
    findAllMessagesReceivedByUser (req: Request, res: Response): void;
    userSendsMessage (req: Request, res: Response): void;
    userDeletesMessage (req: Request, res: Response): void;
};