import { model, Schema } from "mongoose"


const CakeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please put the {PATH} of your Cake"],
            minlenght: [3, "please use at least 3 chars for {PATH}"],
            maxlength: [40, "please use at maximum 40 chars for {PATH}"]
        },
        imgUrl: {
            type: String,
            required: [true, "you need an image please!"],
        },

        layers: {
            type: Number,
            default: 2,
            max: [4, "you can't reach the sky!"]
        },

        hasFrosting: {
            type: Boolean,
            default: false
        }

    },
    { timestamps: true }

)

const Cake = model("Cake", CakeSchema);
export default Cake;
