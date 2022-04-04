/**
 * @file Declares Follow data type representing relationship between
 * users and users, as in user follows a users
 */
 import User from "./User";

/**
 * @typedef Follow Represents follow relationship between a users,
 * as in a user follows a user
 * @property {User} userFollowed being followed by another user
 * @property {User} userFollowing user following another user
 */
export default interface Follow {
    userFollowed: User,
    userFollowing: User
};