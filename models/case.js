import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const caseSchema = new Schema({
    title: {type: String, required: true},
    summary:{type: String, required: true},
    citation:{type: String, required: true},
    icon: {type: String, required: true},
    user: {type:Types.ObjectId, required: true, ref: "User"}
},{
    timestamps: true
}
);

caseSchema.plugin(toJSON);

export const CaseModel = model("Case", caseSchema);