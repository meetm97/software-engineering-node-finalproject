/**
 * @file Controller RESTful Web service API for bookmark resource
 */
import {Express, Request, Response} from "express";
import BookMarkDao from "../daos/BookMarkDao";
import BookMarkControllerI from "../interfaces/UnbookMarkController";

/**
 * @class UnbookMarkController Implements RESTful Web service API for bookmark resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:uid/bookmark to retrieve all the tuits bookmarked by a user
 *     </li>
 *     <li>GET /api/tuits/:tid/bookmark to retrieve all users that bookmarked a tuit
 *     </li>
 *     <li>POST /api/users/:uid/bookmarks/:tid to record that a user bookmarks a tuit
 *     </li>
 *     <li>DELETE /api/users/:uid/unbookmark/:tid to record that a user
 *     no londer bookamark a tuit</li>
 * </ul>
 * @property {BookMarkDao} BookMarkDao Singleton DAO implementing bookmark CRUD operations
 * @property {UnbookMarkController} UnbookMarkController Singleton controller implementing
 * RESTful Web service API
 */
export default class UnbookMarkController implements BookMarkControllerI {
    private static bookmarkDao: BookMarkDao = BookMarkDao.getInstance();
    private static bookmarkController: UnbookMarkController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return UnbookMarkController
     */
    public static getInstance = (app: Express): UnbookMarkController => {
        if(UnbookMarkController.bookmarkController === null) {
            UnbookMarkController.bookmarkController = new UnbookMarkController();
            app.get("/api/tuits/:tid/bookmark", UnbookMarkController.bookmarkController.findAllUsersThatBookMarkedTuit);
            app.get("/api/users/:uid/bookmark", UnbookMarkController.bookmarkController.findAllTuitsBookmarkedByUser);
            app.post("/api/users/:uid/bookmarks/:tid", UnbookMarkController.bookmarkController.userBookmarkedTuit);
            app.delete("/api/users/:uid/unbookmark/:tid", UnbookMarkController.bookmarkController.userUnBookMarksTuit);
        }
        return UnbookMarkController.bookmarkController;
    }

    private constructor() {}

    /**
     * Retrieves all users that bookmark a tuit from the database
     * @param {Request} req Represents request from client, including the path
     * parameter tid representing the bookmarked tuit
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the bookmark objects
     */
    findAllUsersThatBookMarkedTuit = (req: Request, res: Response) =>
        UnbookMarkController.bookmarkDao.findAllUsersThatBookMarkedTuit(req.params.tid)
            .then(bookmark => res.json(bookmark));

    /**
     * Retrieves all tuits bookmark by a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user bookmark the tuits
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the bookmark objects that were bookmark by user
     */
    findAllTuitsBookmarkedByUser = (req: Request, res: Response) =>
        UnbookMarkController.bookmarkDao.findAllTuitsBookmarkedByUser(req.params.uid)
            .then(bookmark => res.json(bookmark));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is liking the tuit
     * and the tuit being bookmarked
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new bookmarked that was inserted in the
     * database
     */
    userBookmarkedTuit = (req: Request, res: Response) =>
        UnbookMarkController.bookmarkDao.userBookmarkedTuit(req.params.uid, req.params.tid)
            .then(bookmark => res.json(bookmark));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and tid representing the user that is unbookmark
     * the tuit and the tuit being unbookmark
     * @param {Response} res Represents response to client, including status
     * on whether deleting the bookmarked was successful or not
     */
    userUnBookMarksTuit = (req: Request, res: Response) =>
        UnbookMarkController.bookmarkDao.userUnBookMarksTuit(req.params.uid, req.params.tid)
            .then(status => res.send(status));
};