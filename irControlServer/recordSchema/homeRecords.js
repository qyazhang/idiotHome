var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var homeRecordSchema = new Schema({
    location:  {
        type: String,
        required: true
    },
    action:  {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


var Dishes = mongoose.model('Dish', homeRecordSchema);

module.exports = Dishes;