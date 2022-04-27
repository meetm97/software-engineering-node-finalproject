/**
 * @file Declares Topic data type representing details about a tuit
 */

 import {ObjectId} from "mongoose";
 /**
  * @typedef Tag Represents user definedd topics for a tuit
  * @property {string} topic Text used by user to describe a tuit
  */
  export default interface Tag {
   _id?: ObjectId,
   tag: String,
   count: number
}