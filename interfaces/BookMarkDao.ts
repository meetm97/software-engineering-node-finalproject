import BookMark from "../models/BookMark";

/**
 * @file Declares API for BookMark related data access object methods
 */
 export default interface BookmarkDaoI {
    findAllUsersThatBookmarkedTuit (tid: string): Promise<BookMark[]>;
    findAllTuitsBookmarkedByUser (uid: string): Promise<BookMark[]>;
    userBookmarksTuit (tid: string, uid: string): Promise<BookMark>;
    userUnbookmarksTuit (tid: string, uid: string): Promise<any>;
    userUnbookmarksAllTuit (uid: string): Promise<any>;
};
