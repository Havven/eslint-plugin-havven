const assertRevert = require('./rules/no-assert-revert-without-await');
const assertInvalidOpcode = require('./rules/no-assert-invalid-opcode-without-await');

module.exports = {
	rules: {
		'no-assert-revert-without-await': assertRevert,
		'no-assert-invalid-opcode-without-await': assertInvalidOpcode,
	},
};
