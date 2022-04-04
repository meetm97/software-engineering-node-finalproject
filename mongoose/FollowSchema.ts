/**
 * @file Implements mongoose schema for Follow
 */

import mongoose, {Schema} from "mongoose";
import Follow from "../models/Follow";

/**
 * @typedef Follow Represents follow made on user
 * @property {ObjectId[]} userFollowed Array of User IDs
 * @property {ObjectId[]} userFollowing Array of Tuit IDs
 */
const FollowSchema = new mongoose.Schema<Follow>({
    userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "follow"});

export default FollowSchema;