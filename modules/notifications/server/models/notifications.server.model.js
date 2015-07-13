'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Notification Schema
 */
var NotificationSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Mensaje name',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill Description'
	},
	link: {
		type: String,
		default: '',
		trim: true
	},
	image: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	users: [{
		id : {
			type: Schema.ObjectId,
			ref: 'User'
		},
		read : {
			type : Boolean,
			default : false
		}
	}]
});

mongoose.model('Notification', NotificationSchema);