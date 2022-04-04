/**
 * @file Implements DAO managing data storage of follow. Uses mongoose FollowModel
 * to integrate with MongoDB
 */
import FollowDaoI from "../interfaces/FollowDao";
import FollowModel from "../mongoose/FollowModel";
import Follow from "../models/Follow";

/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of follows
 * @property {FollowDao} followDao Private single instance of FollowDao
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns FollowDao
     */
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}

    /**
     * Uses FollowModel to retrieve all follow document from follow collection
     * @param {string} uid Users primary key
     * @returns Promise To be notified when follow is retrieved from the database
     */
    findAllUsersThatUserFollows = async (uid: string): Promise<Follow[]> =>
    FollowModel
        .find({userFollowing: uid})
        .populate("userFollowing")
        .exec();
    
    /**
     * Uses FollowModel to retrieve all follow document from follow collection
     * @param {string} uid Users primary key
     * @returns Promise To be notified when follow is retrieved from the database
     */
    findAllFollowersOfUsers = async (uid: string): Promise<Follow[]> =>
    FollowModel
        .find({userFollowed: uid})
        .populate("userFollowed")
        .exec();
    
    /**
     * Inserts follow instance into the database
     * @param {string} userid  Primary key of user1
     * @param {string} userid  Primary key of user1
     * @returns Promise To be notified when follow is inserted into the database
     */  
    userFollowsUser = async (userid: string, uid: string): Promise<any> =>
        FollowModel.create({userFollowing: userid, userFollowed: uid});
    
    /**
     * Removes follow from the database.
     * @param {string} userid  Primary key of user1
     * @param {string} userid  Primary key of user1
     * @returns Promise To be notified when user follow is removed from the database
     */     
    userUnfollowsUser = async (userid: string, uid: string): Promise<any> =>
        FollowModel.deleteOne({userFollowing: userid, userFollowed: uid});
} 