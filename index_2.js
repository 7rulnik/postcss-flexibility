module.exports = () => {
	return {
		postcssPlugin: 'postcss-flexibility',
		AtRule(root) {
			root.walkAtRules(atRule => {
				const isDisabled = atRule.some(({prop, text = ''}) =>
					prop === '-js-display' || text.endsWith('flexibility-disable')
				);

				if (!isDisabled) {
					console.log('IN BRANCH');
					atRule.walkDecls('display', decl => {
						console.log('HERE');
						console.log(decl.value);
						const {value} = decl;
						if (/^flex$|^inline-flex$/.test(value)) {
							console.log('IN REGEX');
							decl.cloneBefore({prop: '-js-display'});
						}
						console.log(decl.value);
					});
				}
			});
		}
	};
};

module.exports.postcss = true;
