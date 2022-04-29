import mongoose, {Schema} from "mongoose";
import Tuit2Tag from "../models/Tuit2Tag";

/**
 * @typedef Tuit2TagSchema Represents likes relationship between tuits and tags
 * @property {ObjectId} tuit the tuit including the tag
 * @property {ObjectId} tag the tag linked with the tuit
 */

const Tuit2TagSchema = new mongoose.Schema<Tuit2Tag>({
    tuit: {type: Schema.Types.ObjectId, ref: 'TuitModel'},
    tag: {type: Schema.Types.ObjectId, ref: 'TagModel'}
}, {collection: "tuit2tags"})

export default Tuit2TagSchema