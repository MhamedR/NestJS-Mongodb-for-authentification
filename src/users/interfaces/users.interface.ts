import { Document } from "mongoose";

export interface IUsers extends Document {
    readonly username: string;
    readonly password: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly dateOfBirth: any;
    readonly email: string;
    readonly id: string;
    readonly tel: any[];
    readonly img?: string;
    readonly createdAt: any;
    readonly idRole: string;
}