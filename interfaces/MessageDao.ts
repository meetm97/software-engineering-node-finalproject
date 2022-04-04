import Message from "../models/Message";

/**
 * @file Declares API for Messages related data access object methods
 */
export default interface MessageDaoI {
    findAllMessagesSentByUser (uid: string): Promise<Message[]>;
    findAllMessagesReceivedByUser (uid: string): Promise<Message[]>;
    userSendsMessage (userid: string, uid: string, message: Message): Promise<any>;
    userDeletesMessage (userid: string, uid: string): Promise<any>;
};