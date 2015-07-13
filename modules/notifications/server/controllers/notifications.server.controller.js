'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
	mongoose = require('mongoose'),
	Notification = mongoose.model('Notification');

exports.forUser = function(req, res){
	console.log(req.session);
	Notification.find({}).exec(function(err, notification) {
		console.log(notification)
		if(err)
			req.send(400);

		var obj = [];

		notification.forEach(function(n){
			n.users.forEach(function(data){
				//if(data.id == req.session.passport.user)
					obj.push(n)
			});
		});
		console.log(obj);
		res.jsonp({notifications : obj});
	});
};

exports.create = function(req, res){
	var notification = new Notification(req.body);

	notification.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: err
			});
		} else {
			res.jsonp(notification);
		}
	});
};