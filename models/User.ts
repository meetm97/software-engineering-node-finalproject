/**
 * @file Declares Follow data type representing relationship between
 * Users, user representation in the tuit website
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";

/**
 * @typedef User Represents the user on tuit website
 * @property {ObjectId} _id the user object id
 * @property {string} username the username for the user
 * @property {string} password the password for the user
 * @property {string} firstName the firstname of the user
 * @property {string} lastName the lastname of the user
 * @property {string} email email id of the user
 * @property {string} profilePhoto profile photo for the user
 * @property {string} headerImage the header image for the user
 * @property {string} biography the biography description of the user
 * @property {Date} dateOfBirth the date of birth of the user
 * @property {string} accountType the type of account of the user
 * @property {string} maritalStatus the martial status of the user
 * @property {number} location the current location of the user
 * @property {number} salary the salary of the user
 */
export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    email: string,
    profilePhoto?: string,
    headerImage?: string,
    biography?: string,
    dateOfBirth?: Date,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location,
    salary?: number
};