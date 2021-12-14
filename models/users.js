<<<<<<< HEAD
const mgdbs = require("mongoose");

const nameSchema =  new mgdbs.Schema({
    title:String,
    first:String,
    last:String
})

const idSchema = new mgdbs.Schema({
    type:String,
    value:String
})

const pictureSchema = new mgdbs.Schema({
    large: String,
    medium: String,
    thumbnail: String,
})

const userSchema = new mgdbs.Schema({
    id:idSchema,
    name:nameSchema,
    gender:String,
    email:{
        type:String,
        required:true
    },
    type:String,
    phone:String,
    cell:String,
    address:String,
    birth_date:String,
    picture:pictureSchema
});

/**
 * Check if model has been compiled
 *  @param {string} modelName
 */

const checkModel = function(modelName) {
    mgdbs.modelNames().indexOf(modelName) == -1
    ? mgdbs.model(modelName, userSchema)
    : mgdbs.connection.model(modelName)
}

=======
const mgdbs = require("mongoose");

const nameSchema =  new mgdbs.Schema({
    title:String,
    first:String,
    last:String
})

const idSchema = new mgdbs.Schema({
    type:String,
    value:String
})

const pictureSchema = new mgdbs.Schema({
    large: String,
    medium: String,
    thumbnail: String,
})

const userSchema = new mgdbs.Schema({
    id:idSchema,
    name:nameSchema,
    gender:String,
    email:{
        type:String,
        required:true
    },
    type:String,
    phone:String,
    cell:String,
    address:String,
    birth_date:String,
    picture:pictureSchema
});

/**
 * Check if model has been compiled
 *  @param {string} modelName
 */

const checkModel = function(modelName) {
    mgdbs.modelNames().indexOf(modelName) == -1
    ? mgdbs.model(modelName, userSchema)
    : mgdbs.connection.model(modelName)
}

>>>>>>> 73ec1c64de61a20f2c8896c1ffb4b60a0b19c786
checkModel("Users");