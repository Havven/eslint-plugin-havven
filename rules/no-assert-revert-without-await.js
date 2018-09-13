module.exports = {
	// This ensures you can't have code that looks like this:
	// assert.revert(/* some operation or block here */);
	//
	// This is a problem to have because assert.revert is an async method, so it just returns
	// a failing promise.
	//
	// In order for the test to fail as you'd expect, you must put an await there, e.g.
	//
	// await assert.revert(/* some operation or block here */);
	//
	// This rule enforces that this is the case.
	create: function(context) {
		return {
			CallExpression(node) {
				if (
					// Is it assert.revert?
					node.callee.type === 'MemberExpression' &&
					node.callee.object.type === 'Identifier' &&
					node.callee.object.name === 'assert' &&
					node.callee.property.type === 'Identifier' &&
					node.callee.property.name === 'revert' &&
					// And is the parent not an await?
					node.parent.type !== 'AwaitExpression'
				) {
					// Then we have a problem.
					context.report(
						node,
						"'assert.revert' must be 'await assert.revert' to avoid the error being silently ignored."
					);
				}
			},
		};
	},
};
