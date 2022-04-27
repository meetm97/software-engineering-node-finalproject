import mongoose from "mongoose";
import TagSchema from "./TagSchema";
const TagModel = mongoose.model("TopicModel", TagSchema);
export default TagModel;