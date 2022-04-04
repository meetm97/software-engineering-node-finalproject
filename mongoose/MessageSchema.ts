/**
 * @file Implements mongoose schema for Message
 */

import mongoose, {Schema} from "mongoose";
import Message from "../models/Message";

/**
 * @typedef Message Represents messages sent from one user to another user
 * @property {string} message the body or content of message to be sent 
 * @property {ObjectId[]} to Array of User IDs
 * @property {ObjectId[]} from Array of User IDs
 * @property {Date} sentOn The date the message was sent
 */
const MessageSchema = new mongoose.Schema<Message>({
    message: {type: String, required: true, default: `testmessage${Date.now()}`},
    to: {type: Schema.Types.ObjectId, ref: "UserModel"},
    from: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn: {type: Date, default: Date.now}
}, {collection: "message"});

export default MessageSchema;