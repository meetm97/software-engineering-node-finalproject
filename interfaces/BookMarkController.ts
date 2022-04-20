import {Request, Response} from "express";
/**
 * @file BookMarkController interface Represents web services for bookmark resources
 */

 export default interface BookmarkControllerI {
     findAllUsersThatBookmarkedTuit (req: Request, res: Response): void;
     findAllTuitsBookmarkedByUser (req: Request, res: Response): void;
     userBookmarksTuit (req: Request, res: Response): void;
     userUnbookmarksTuit (req: Request, res: Response): void;
     userUnbookmarksAllTuit (req: Request, res: Response): void;
     userTogglesTuitBookmarks (req: Request, res: Response): void;
     findUserBookmarkedTuit (req: Request, res: Response): void;
 };