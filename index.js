import postcss from 'postcss';

const postcssFlexibility = postcss.plugin('postcss-flexibility', () => css => {
	css.walkRules(rule => {
		const isDisabled = rule.some(({prop, text = ''}) =>
			prop === '-js-display' || text.endsWith('flexibility-disable')
		);

		if (!isDisabled) {
			rule.walkDecls('display', decl => {
				const {value} = decl;
				if (/flex/.test(value)) {
					decl.cloneBefore({prop: '-js-display'});
				}
			});
		}
	});
});

export default postcssFlexibility;
