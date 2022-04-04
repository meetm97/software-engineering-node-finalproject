/**
 * @file Controller RESTful Web service API for follow resource
 */
 import {Express, Request, Response} from "express";
 import MessageDao from "../daos/MessageDao";
 import MessageControllerI from "../interfaces/MessageController";
 
  /**
  * @class TuitController Implements RESTful Web service API for tuits resource.
  * Defines the following HTTP endpoints:
  * <ul>
  *     <li>POST /api/users/:userid/sendmessage/:uid to send a message</li>
  *     <li>GET /api/users/:userid/messagesent to retrieve all the messages sent by user</li>
  *     <li>GET /api/users/:uid/messagesreceived to retrieve all messages received by user</li>
  *     <li>DELETE /api/users/:userid/deletemessage/:uid to delete a message</li>
  * </ul>
  * @property {MessageDao} messageDao Singleton DAO implementing message CRUD operations
  * @property {MessageController} messageController Singleton controller implementing
  * RESTful Web service API
  */
 export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;
    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return MessageController
     */
    public static getInstance = (app: Express): MessageController => {
        if(MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.get("/api/users/:userid/messagesent", MessageController.messageController.findAllMessagesSentByUser);
            app.get("/api/users/:uid/messagesreceived", MessageController.messageController.findAllMessagesReceivedByUser);
            app.post("/api/users/:userid/sendmessage/:uid", MessageController.messageController.userSendsMessage);
            app.delete("/api/users/:userid/deletemessage/:uid", MessageController.messageController.userDeletesMessage);
        }
        return MessageController.messageController;
    }
    private constructor() {}
    
    /**
     * Retrieves all messages sent by the user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter userid representing the messages sent by the user
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */
    findAllMessagesSentByUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesSentByUser(req.params.userid)
            .then(messagessent => res.json(messagessent));
 
    /**
     * Retrieves all messages received by the user from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the messages received by the user
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */
    findAllMessagesReceivedByUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesReceivedByUser(req.params.uid)
            .then(messagesreceived => res.json(messagesreceived));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters userid and uid representing both the users userid for user 
     * to send message to another user
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new message that was inserted in the
     * database
     */
    userSendsMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userSendsMessage(req.params.userid, req.params.uid,req.body)
            .then(messagesent => res.json(messagesent));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters userid and uid representing both the users userid for user 
     * to unsend message
     * @param {Response} res Represents response to client, including status
     * on whether deleting the unsend was successful or not
     */
    userDeletesMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userDeletesMessage(req.params.userid, req.params.uid)
            .then((status) => res.json(status));
 }