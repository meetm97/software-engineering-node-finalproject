import Tuit2Tag from "../models/Tuit2Tag";
import Tag from "../models/Tag";
import Tuit from "../models/Tuit";

export default interface Tuit2TagDaoI {
    findAllTuit2Tags(): Promise<Tuit2Tag[]>;
    createTuit2Tag(tuitID: string, tagID: string): Promise<Tuit2Tag>;
    deleteTuit2Tag(tuitID: string, tagID: string): Promise<any>;
    findTuit2TagsByTuit(tuitID: string): Promise<Tuit2Tag[]>;
    findTuit2TagsByTag(tagID: string): Promise<Tuit2Tag[]>;
    findTagsByTuit(tuitID: string): Promise<Tag[]>;
    findTuitsByTagText(tagText: string): Promise<Tuit[]>;
};