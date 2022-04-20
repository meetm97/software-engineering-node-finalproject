/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
 import LikeDaoI from "../interfaces/LikeDao";
 import LikeModel from "../mongoose/LikeModel";
 import Like from "../models/Like";
 import TopicDaoI from "../interfaces/TopicDao";
 import Topic from "../models/Topic";
 import TopicModel from "../mongoose/TopicModel";
 import TuitModel from "../mongoose/TuitModel";
 import TopicToTuitModel from "../mongoose/TopicToTuitModel";
 
 /**
  * @class LikeDao Implements Data Access Object managing data storage
  * of Likes
  * @property {LikeDao} likeDao Private single instance of LikeDao
  */
 export default class TopicDao implements TopicDaoI {
	  private static topicDao: TopicDao | null = null;
	  public static getInstance = (): TopicDao => {
			if(TopicDao.topicDao === null) {
				 TopicDao.topicDao = new TopicDao();
			}
			return TopicDao.topicDao;
	  }
	  private constructor() {}
 
 
	  /**
		* Inserts like instance into the database
		* @param {string} uid User's primary key
		* @param {string} tid Tuit's primary key
		* @returns Promise To be notified when like is inserted into the database
		*/
	  addTopic = async (tpc: string): Promise<Topic> =>
			TopicModel.create({topic:tpc});
 
	  /**
		* Removes like from the database.
		* @param {string} uid User's primary key
		* @param {string} tid Tuit's primary key
		* @returns Promise To be notified when like is removed from the database
		*/
	  deleteTopic = async (tid: string): Promise<any> =>
			TopicModel.deleteOne({_id: tid});

		/**
		 * 
		 * @returns returns topics
		 */
	  findAllTopics = async (): Promise<any>=>
			TopicModel.find();
 
	  
 }