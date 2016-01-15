var postcss = require('postcss');

module.exports = postcss.plugin('postcss-flexibility', function () {
	return function (css) {
		css.walkDecls('display', function (decl) {
			var value = decl.value;
			if (value && value === 'flex') {
				decl.cloneBefore({prop: '-js-display', value: 'flex'});
			}
		});
	};
});
