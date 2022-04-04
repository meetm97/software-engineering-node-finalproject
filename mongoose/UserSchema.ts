/**
 * @file Implements mongoose schema for user
 */

import mongoose from "mongoose";
import User from "../models/User";

/**
 * @typedef User Represents the user on tuit website
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
const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true, default: `testusername${Date.now()}`},
    password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, default: `testemail${Date.now()}`},
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: {type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"]},
    maritalStatus: {type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"]},
    location: {
        latitude: Number,
        longitude: Number
    },
    salary: {type: Number, default: 50000}
}, {collection: "users"});

export default UserSchema;