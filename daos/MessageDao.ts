/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
import MessageDaoI from "../interfaces/MessageDao";
import MessageModel from "../mongoose/MessageModel";
import Message from "../models/Message";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of messages
 * @property {MessageDao} messageDao Private single instance of MessageDao
 */
export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns MessageDao
     */
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}

    /**
     * Uses MessageModel to retrieve all message document from message collection
     * @param {string} userid User's primary key
     * @returns Promise To be notified when message is retrieved from the database
     */
    findAllMessagesSentByUser = async (userid: string): Promise<Message[]> =>
        MessageModel
            .find({from: userid})
            .populate("from")
            .exec();
    
    /**
     * Uses MessageModel to retrieve all message document from message collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when message is retrieved from the database
     */
    findAllMessagesReceivedByUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({to: uid})
            .populate("to")
            .exec();

    /**
     * Inserts message instance into the database
     * @param {string} userid  Primary key of user1 sender of the message
     * @param {string} uid  Primary key of user2 receiver of the m
     * @param {Message} message Instance to be inserted into the database
     * @returns Promise To be notified when message is inserted into the database
     */     
    userSendsMessage = async (userid: string, uid: string, message: Message): Promise<any> =>
        MessageModel.create({...message, from: userid, to: uid});
    
    /**
     * Removes message from the database.
     * @param {string} userid  Primary key of user 1 message to be removed
     * @param {string} uid  Primary key of user 2 message to be removed
     * @returns Promise To be notified when user message is removed from the database
     */
    userDeletesMessage = async (userid: string, uid: string): Promise<any> =>
        MessageModel.deleteOne({from: userid, to: uid});
}