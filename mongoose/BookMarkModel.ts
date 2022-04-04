/**
 * @file Implements mongoose model to CRUD
 * documents in the BookMark collection
 */
 import mongoose from "mongoose";
 import BookMarkSchema from "./BookMarkSchema";
 const BookMarkModel = mongoose.model("BookMarkModel", BookMarkSchema);
 export default BookMarkModel;