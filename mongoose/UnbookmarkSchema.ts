/**
 * @file Implements mongoose schema for BookMark
 */
import mongoose, {Schema} from "mongoose";
import UnbookMark from "../models/Unbookmark";

/**
 * @typedef BookMark Represents bookmark made on tuit
 * @property {ObjectId[]} bookMarkedTuit Array of Tuit IDs
 * @property {ObjectId[]} bookMarkedBy Array of BookMark IDs
 */
const UnbookMarkSchema = new mongoose.Schema<UnbookMark>({
    unbookMarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    unbookMarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "unbookmark"});

export default UnbookMarkSchema;