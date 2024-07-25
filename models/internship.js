const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
    },
    EducationLevel: {
        type: String,
    },
    InternshipDescription: {
        type: String,
    },
    Paid: {
        type: Boolean,
    },
    instagramLink: {
        type: String,
    },
    AmountPaid: {
        type: String,
    },
    InternshipType: {
        type: String,
    },
    userId: {
        type: String,
    }
});

const Internship = mongoose.model("CreateInternship", internshipSchema);

module.exports = Internship;