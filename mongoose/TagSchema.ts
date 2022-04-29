
import mongoose, {Schema} from "mongoose";
import Tag from "../models/Tag";

/**
 * Schema definition for likes
 */
 const TagSchema = new mongoose.Schema<Tag>({
    tag: {type: String, required: true},
    count: {type: Number, default: 1}
    // tuit: {type: Schema.Types.ObjectId, ref: 'TuitModel'},
}, {collection: "tags"})

export default TagSchema