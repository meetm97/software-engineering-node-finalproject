/**
 * @file Declares Location data type representing relationship between
 * users location
 */

/**
 * @typedef Location Represents location of the user
 * @property {number} latitude latitude location of the user
 * @property {number} longitude longitude location of the user
 */
export default interface Location {
    latitude: number,
    longitude: number
};
 