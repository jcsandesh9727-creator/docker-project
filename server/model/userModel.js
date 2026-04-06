
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActivated: {
        type: Boolean,
        default: false
    }
})

userSchema.pre("save",async function() {

    try {
        
        if(!this.isModified('password')){
            return;
        }
        
         const hash = await bcrypt.hash(password, 5)
    } catch (error) {
         next(error)
    }
      
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel