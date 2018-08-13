const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeolocateModel = new Schema({
	ip: {type: String},
	latitude: {type: Number},
	longitude: {type: Number},
	name: {type: String},
	active: {type: Boolean}
},{
	collection: 'geolocations'
});

module.exports = mongoose.model('GeolocateModel', GeolocateModel);