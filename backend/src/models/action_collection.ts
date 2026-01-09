import mongoose, { Document, Schema } from "mongoose";

export type ActionType = "comment" | "like";

export interface IAction extends Document {
  userid?: mongoose.Types.ObjectId;
  targetId?: mongoose.Types.ObjectId;
  action_type: ActionType;
  value: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const ActionSchema = new Schema<IAction>(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    targetId: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    action_type: {
      type: String,
      enum: ["comment", "like"],
      required: true,
    },

    value: {
      type: String,
      default: null,
      validate: {
        validator: function (this: IAction, v: string | null) {
          if (this.action_type === "comment") {
            return typeof v === "string" && v.trim().length > 0;
          }
          return true; 
        },
        message: "Comment text is required for comment action",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IAction>("Action", ActionSchema);
