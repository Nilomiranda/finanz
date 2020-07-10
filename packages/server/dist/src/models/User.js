"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// tslint:disable:only-arrow-functions
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 8,
        select: false,
        required: true
    },
    createdAt: {
        type: Date,
        "default": Date.now
    }
}, { timestamps: true });
userSchema.pre('save', function () {
    console.log('this on pre save -> ', this);
});
exports["default"] = userSchema;
//# sourceMappingURL=User.js.map