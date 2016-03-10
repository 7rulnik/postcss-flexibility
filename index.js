import postcss from 'postcss';

const postcssFlexibility = postcss.plugin('postcss-flexibility', () => css => {
	css.walkRules(rule => {
		const jsDisplayExist = rule.some(({prop}) => prop === '-js-display');

		if (!jsDisplayExist) {
			rule.walkDecls('display', decl => {
				const {value} = decl;
				if (value === 'flex') {
					decl.cloneBefore({prop: '-js-display'});
				}
			});
		}
	});
});

export default postcssFlexibility;
