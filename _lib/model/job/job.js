import mongoose from "mongoose";
import { Schema } from "mongoose";

const KrafitechJobSchema = new Schema({
    jobtitle: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobtype: {
        type: String,
        required: true
    },
    jobdescription: {
        type: String,
        required: true
    },
    responsibilties: [{
        responsibilityone: {
            type: String,
            required: true
        }
    }],
    requirement: [{
        requirementone: {
            type: String,
            required: true
        }
    }],
    benefits: [{
        benefitone: {
            type: String,
            required: true
        }
    }],
    applicationprocess: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Krafitechjob = mongoose.models.Krafitechjob || mongoose.model("Krafitechjob", KrafitechJobSchema);
