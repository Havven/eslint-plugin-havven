const assertRevert = require('./rules/no-assert-revert-without-await');

module.exports = {
	rules: {
		'no-assert-revert-without-await': assertRevert,
	},
};
