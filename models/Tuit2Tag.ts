import Tuit from "./Tuit";
import Tag from "./Tag";
import {ObjectId} from "mongoose";

/**
 * @typedef Tuit2Tag Represents the relationship between a single
 * tuit and a single tag
 * @property {Tuit} tuit the tuit including the tag
 * @property {Tag} tag the tag linked with the tuit
 */
export default interface Tuit2Tag {
    _id: ObjectId,
    tuit: Tuit,
    tag: Tag
}