import { model, Schema } from "mongoose"
const userSchema = new Schema({
    email : {type: String},
    password : {type: String},

})

const User = model?.User || model("User", userSchema)

export default User;