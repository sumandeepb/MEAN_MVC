/* 
 * MEAN MVC Learning Project
 * Released under MIT License
 */

var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: {type: String, index: true},
    username: {type: String, unique: true},
    password: String
});

/*UserSchema.pre('save', function (next) {
    if (true) {
        next();
    } else {
        next(new Error('No can do, sir!'));
    }
});*/

mongoose.model('User', UserSchema);
