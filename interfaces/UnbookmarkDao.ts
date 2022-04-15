/**
 * @file Declares API for dislikes related data access object methods
 */
import UnbookMark from "../models/Unbookmark";


export default interface UnbookmarkDaoI {
    userUnbookmarksTuit (tid: string, uid: string): Promise<any>;
    userUndoUnbookmarkTuit (tid: string, uid: string): Promise<any>;
    findUserUnbookmarksTuit (tid: string, uid: string): Promise<UnbookMark>;
    countHowManyUnbookmarkedTuit (tid: string): Promise<any>;
};