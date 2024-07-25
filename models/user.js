const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    userId: {
        type: String,
    },
    name: {
        type: String,
    },
    bio: {
        type: String,
    },
    EducationLevel: {
        type: String,
    },
    InstitutionName: {
        type: String,
    },
    GraduationLevel: {
        type: String,
    },
    email: {
        type: String,
    },
    skills: {
        type: String,
    },
    resume: {
        type: String,
    },
    role: {
        type: String,
    },
    verified: {
        type: Boolean,
    },
    instagramLink: {
        type: String,
    },
    linkedInLink: {
        type: String,
    },
    xLink: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;