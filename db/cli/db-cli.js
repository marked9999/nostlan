module.exports = async function (arg) {
	global.path = require('path');
	arg.__root = path.join(__dirname, '/../..').replace(/\\/g, '/');
	await require(arg.__root + '/core/setup.js')(arg);

	const db = require(__root + '/core/db.js');

	global.sys = arg.sys;

	if (arg.update) {
		await db.generate();
		await db.merge();
	} else if (arg.generate) {
		db.generate();
	} else if (arg.merge) {
		db.merge();
	} else {
		er("cli db can't do this action: " + arg.do);
	}
};
