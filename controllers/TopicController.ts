/**
 * @file Controller RESTful Web service API for topics resource
 */
 import {Express, Request, Response} from "express";
 import TopicDao from "../daos/TopicDao";
 import TopicControllerI from "../interfaces/TopicController";
 
 export default class TopicController implements TopicControllerI {
	  private static topicDao: TopicDao = TopicDao.getInstance();
	  private static topicController: TopicController | null = null;
 
 
	  public static getInstance = (app: Express): TopicController => {
			if(TopicController.topicController === null) {
				 TopicController.topicController = new TopicController();
				 app.get("/api/topics",TopicController.topicController.findAllTopics);
				 app.post("/api/topics", TopicController.topicController.createTopic);
				 app.delete("/api/topics/:tid", TopicController.topicController.deleteTopic);
 
			}
			return TopicController.topicController;
	  }
 
	  private constructor() {}
 
 
	  createTopic = (req: Request, res: Response) =>
			TopicController.topicDao.addTopic(req.body.topic)
				 .then(topics=>res.json(topics));
 
	  deleteTopic = (req: Request, res: Response) =>
			TopicController.topicDao.deleteTopic(req.params.tid)
				 .then(status=>res.send(status))
 
	  findAllTopics= (req: Request, res: Response) =>
			TopicController.topicDao.findAllTopics()
				 .then(topics=>res.json(topics));
 
 };