const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const rankSchema = mongoose.Schema(
    {
        rank_code: {
            type: String,
            required: true,
            trim: true
        },
        rank: {
            type: String,
            required: true,
            trim: true
        },
        rank_name: {
            type: String,
            required: true,
            trim: true
        },
        branchOfService: {
            type: String,
            required: true,
            trim: true
        },
        brsvc: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamps: true
    }
);

const rank = mongoose.model('rank', rankSchema);
module.exports = rank;