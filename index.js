module.exports = () => {
	return {
		postcssPlugin: 'postcss-flexibility',
		Once(root) {
			root.walkRules(rule => {
				const isDisabled = rule.nodes.some(({prop, text = ''}) =>
					prop === '-js-display' || text.endsWith('flexibility-disable'));

				if (!isDisabled) {
					rule.walkDecls('display', decl => {
						const {value} = decl;
						if (/^flex$|^inline-flex$/.test(value)) {
							decl.cloneBefore({prop: '-js-display'});
						}
					});
				}
			});
		}
	};
};

module.exports.postcss = true;
