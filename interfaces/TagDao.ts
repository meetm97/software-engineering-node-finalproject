import Tag from "../models/Tag";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface TagDaoI {
    createTag(tag: Tag): Promise<Tag>;
    deleteTag(tagID: string): Promise<any>;
    findAllTags(): Promise<Tag[]>;
    findTagById(tagID: string): Promise<any>;
    findTagByText(tag: string): Promise<any>;
    updateTag(tag: Tag): Promise<any>;
    findTagById(tagID: string): Promise<any>;
};