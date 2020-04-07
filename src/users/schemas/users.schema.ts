import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    username: String,
    password: String,
    lastName: String,
    firstName: String,
    dateOfBirth: String,
    email: String,
    id: String,
    tel: Array,
    img: String,
    createdAt: String,
    idRole: String
})