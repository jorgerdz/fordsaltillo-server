'use strict';

module.exports = function(app) {
	var notifications = require('../controllers/notifications.server.controller');

	// Mensajes Routes
	app.route('/notifications')
		.get(notifications.forUser);

	app.route('/notifications')
		.post(notifications.create);
};