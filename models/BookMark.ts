/**
 * @file Declares Bookmark data type representing relationship between
 * users and tuits, as in user bookmarks a tuit
 */
 import Tuit from "./Tuit";
 import User from "./User";
 
 /**
  * @typedef BookMark Represents bookmarks relationship between a user and a tuit,
  * as in a user bookmarks a tuit
  * @property {Tuit} bookMarkedTuit Tuit being bookmarked
  * @property {User} BookmarkedBy User bookmarking the tuit
  */
 export default interface BookMark {
     bookMarkedTuit: Tuit,
     bookMarkedBy: User
 };