# Havven ESLint Plugin

This repo contains custom eslint rules used in the Havven project.

There's only one rule at the moment, which prevents code that looks like this:

```javascript
assert.revert(/* some block or promise */);
```

The rule insists that the code looks like this instead:

```javascript
await assert.revert(/* some block or promise */);
```

This is important, because without the `await`, the failure from `assert.revert` is simply discarded as a failing promise,
and because of how mocha is set up in truffle, this doesn't print any warning or anything. So it's important that the
project enforce that you can't call `assert.revert` without `await` in front of it.
