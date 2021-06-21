
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum StatusEnum {
    active = "active",
    inactive = "inactive",
    suspended = "suspended"
}

export class CreateRestaurantInput {
    image?: string;
    latitude: number;
    longitude: number;
    name: string;
    type: string;
    status?: StatusEnum;
}

export class UpdateRestaurantInput {
    _id: ObjectId;
    image?: string;
    latitude?: number;
    longitude?: number;
    name: string;
    type: string;
    status?: StatusEnum;
}

export abstract class IMutation {
    abstract createRestaurant(input: CreateRestaurantInput): Restaurant | Promise<Restaurant>;

    abstract removeRestaurant(_id: ObjectId): Restaurant | Promise<Restaurant>;

    abstract restoreRestaurant(_id: ObjectId): Restaurant | Promise<Restaurant>;

    abstract updateRestaurant(input: UpdateRestaurantInput): Restaurant | Promise<Restaurant>;
}

export abstract class IQuery {
    abstract restaurant(_id: ObjectId): Restaurant | Promise<Restaurant>;

    abstract restaurants(): Restaurant[] | Promise<Restaurant[]>;
}

export class Image {
    encoding: string;
    filename: string;
    mimetype: string;
    originalName: string;
}

export class Restaurant {
    _createdOn?: Date;
    _id: ObjectId;
    _ref?: number;
    _updatedOn?: Date;
    image?: string;
    latitude: number;
    longitude: number;
    name: string;
    type: string;
    status?: StatusEnum;
}

export type ObjectId = any;
