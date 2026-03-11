const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a category name'],
            trim: true,
            unique: true,
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
            default: 'https://via.placeholder.com/150',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Category', categorySchema);
