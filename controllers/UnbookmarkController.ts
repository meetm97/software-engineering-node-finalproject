/**
 * @file Controller RESTful Web service API for bookmark resource
 */
import UnbookMarkControllerI from "../interfaces/UnbookMarkController";
import {Express, Request, Response} from "express";

/**
 * @class UnbookMarkController Implements RESTful Web service API for bookmark resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/users/:uid/unbookmark to retrieve all the tuits bookmarked by a user
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
export default class UnbookMarkController implements UnbookMarkControllerI {
    userTogglesTuitUnbookmarks(req: Request, res: Response): void {
    }


};