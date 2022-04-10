/**
 * @file Implements mongoose model to CRUD
 * documents in the BookMark collection
 */
import mongoose from "mongoose";
import UnbookMarkSchema from "./UnbookmarkSchema";

const UnbookMarkModel = mongoose.model("BookMarkModel", UnbookMarkSchema);
export default UnbookMarkModel;