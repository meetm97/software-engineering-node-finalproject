
import {Request, Response} from "express";
import Tuit from "../models/Tuit";

/**
 * @file TuitController interface Represents web services for tuit resources
 */
export default interface TuitControllerI {
    findAllTuits(req: Request, res: Response): void;
    findTuitById(req: Request, res: Response): void;
    findAllTuitsByUser(req: Request, res: Response): void;
    createTuit(req: Request, res: Response): void;
    createTuitByUser(req: Request, res: Response): void;
    updateTuit(req: Request, res: Response): void;
    deleteTuit(req: Request, res: Response): void;
};