const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    internshipId: {
        type: String,
    },
    status: {
        type: String
    },
});

const Applications = mongoose.model("Applications", applicationSchema);

module.exports = Applications;