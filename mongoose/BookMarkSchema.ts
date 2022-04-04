/**
 * @file Implements mongoose schema for BookMark
 */
import mongoose, {Schema} from "mongoose";
import BookMark from "../models/BookMark";

/**
 * @typedef BookMark Represents bookmark made on tuit
 * @property {ObjectId[]} bookMarkedTuit Array of Tuit IDs
 * @property {ObjectId[]} bookMarkedBy Array of BookMark IDs
 */
const BookMarkSchema = new mongoose.Schema<BookMark>({
    bookMarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookMarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmark"});

export default BookMarkSchema;