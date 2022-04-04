/**
 * @file Declares Follow data type representing relationship between
 * users , as in user messages another users
 */
import User from "./User";

/**
* @typedef Message Represents likes relationship between Two users,
* as in user messages another users
* @property {string} message the message body or content
* @property {User} to The receiver of the message
* @property {User} from The sender of the message
* @property {Date} sentOn The date the message was sent
*/
export default interface Message {
  message: string,
  to: User,
  from: User,
  sentOn: Date
};