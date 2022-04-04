import Follow from "../models/Follow";

/**
 * @file Declares API for Follow related data access object methods
 */
export default interface FollowI {
    findAllUsersThatUserFollows (uid: string): Promise<Follow[]>;
    findAllFollowersOfUsers (uid: string): Promise<Follow[]>;
    userFollowsUser (userid: string, uid: string): Promise<any>;
    userUnfollowsUser (userid: string, uid: string): Promise<Follow>;
};