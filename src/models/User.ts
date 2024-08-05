import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/user.types";

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 225
    },
    firstname: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 225
    },
    lastname: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 225
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 225,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    }
}, { timestamps: true });

export default mongoose.model<IUser>("User", UserSchema);