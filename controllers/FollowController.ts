/**
 * @file Controller RESTful Web service API for follow resource
 */
 import {Express, Request, Response} from "express";
 import FollowDao from "../daos/FollowDao";
 import FollowControllerI from "../interfaces/FollowController";

  /**
  * @class FollowController Implements RESTful Web service API for follow resource.
  * Defines the following HTTP endpoints:
  * <ul>
  *     <li>GET /api/users/:uid/follows to retrieve all the list of other user the user is following
  *     </li>
  *     <li>GET /api/users/:uid/followed to retrieve all the list of user that the user is being followed by
  *     </li>
  *     <li>POST /api/users/:userid/follows/:uid to record a user follows another user 
  *     </li>
  *     <li>DELETE /api/users/:userid/unfollows/:uid to record that a user no longer follows a user
  *     </li>
  * </ul>
  * @property {FollowDao} FollowDao Singleton DAO implementing follow CRUD operations
  * @property {FollowController} FollowController Singleton controller implementing
  * RESTful Web service API
  */
 export default class FollowController implements FollowControllerI {
    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return FollowController
     */
    public static getInstance = (app: Express): FollowController => {
        if(FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.get("/api/users/:uid/follows", FollowController.followController.findAllUsersThatUserFollows);
            app.get("/api/users/:uid/followed", FollowController.followController.findAllFollowersOfUsers);
            app.post("/api/users/:userid/follows/:uid", FollowController.followController.userFollowsUser);
            app.delete("/api/users/:userid/unfollows/:uid", FollowController.followController.userUnfollowsUser);
        }
        return FollowController.followController;
    }
    private constructor() {}
     
    /**
     * Retrieves all users that follows a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the list of other user the user is following
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the follow objects
     */
    findAllUsersThatUserFollows = (req: Request, res: Response) =>
        FollowController.followDao.findAllUsersThatUserFollows(req.params.uid)
            .then(follows => res.json(follows));
 
    /**
     * Retrieves all users that followed by a user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the  list of user that the user is being followed by
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the follow objects
     */
    findAllFollowersOfUsers = (req: Request, res: Response) =>
        FollowController.followDao.findAllFollowersOfUsers(req.params.uid)
            .then(followed => res.json(followed));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters userid and uid representing both the users userid for user 
     * following and uid for user being followed
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new follows that was inserted in the
     * database
     */
    userFollowsUser = (req: Request, res: Response) =>
        FollowController.followDao.userFollowsUser(req.params.userid, req.params.uid)
            .then(follows => res.json(follows));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters userid and uid representing both the users userid for user 
     * following and uid for user being unfollowed
     * @param {Response} res Represents response to client, including status
     * on whether deleting the unfollow was successful or not
     */
    userUnfollowsUser = (req: Request, res: Response) =>
            FollowController.followDao.userUnfollowsUser(req.params.userid, req.params.uid)
                .then((status) => res.json(status));
 }