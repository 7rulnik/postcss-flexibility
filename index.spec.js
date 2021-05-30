import postcss from 'postcss';

import plugin from './';

function run(input, output) {
	return postcss([plugin()]).process(input, {from: undefined})
		.then(result => {
			expect(result.css).toEqual(output);
			expect(result.warnings().length).toEqual(0);
		});
}

test('Add "-js-display: flex" if "display: flex" present', () => {
	return run(
		`a {
			color: red;
			display: flex;
		}`,
		`a {
			color: red;
			-js-display: flex;
			display: flex;
		}`
	);
});

test('Add "-js-display: inline-flex" if "display: inline-flex" present', () => {
	return run(
		`a {
			color: red;
			display: inline-flex;
		}`,
		`a {
			color: red;
			-js-display: inline-flex;
			display: inline-flex;
		}`
	);
});

test('Don\'t add "-js-display: flex" if it\'s already exist', () => {
	return run(
		`a {
			color: red;
			-js-display: flex;
			display: flex;
		}`,
		`a {
			color: red;
			-js-display: flex;
			display: flex;
		}`
	);
});

test('Don\'t add "-js-display: flex" if comment "flexibility-disable" is exist', () => {
	return run(
		`a {
			color: red;
			/* flexibility-disable */
			display: flex;
		}`,
		`a {
			color: red;
			/* flexibility-disable */
			display: flex;
		}`
	);
});

test('Don\'t add "-js-display: flex" if comment "! flexibility-disable" is exist', () => {
	return run(
		`a {
			color: red;
			/*! flexibility-disable */
			display: flex;
		}`,
		`a {
			color: red;
			/*! flexibility-disable */
			display: flex;
		}`
	);
});

test('Don\'t add "-js-display: flex" for prefixed version', () => {
	return run(
		`a {
			color: red;
			display: -webkit-flex;
			display: flex;
		}
		b {
			color: red;
			display: -moz-inline-flex;
			display: inline-flex;
		}`,
		`a {
			color: red;
			display: -webkit-flex;
			-js-display: flex;
			display: flex;
		}
		b {
			color: red;
			display: -moz-inline-flex;
			-js-display: inline-flex;
			display: inline-flex;
		}`
	);
});

test('Works with other PostCSS plugins', () => {
	const changedSelector = 'bbb';

	const otherPlugin = () => {
		return {
			postcssPlugin: 'test',
			Rule(rule) {
				rule.selector = changedSelector;
			}
		};
	};
	otherPlugin.postcss = true;

	const result = postcss([otherPlugin(), plugin()]).process(
		`aaa {
			display: flex;
		}`, {
			from: undefined
		});

	expect(result.css).toEqual(
		`${changedSelector} {
			-js-display: flex;
			display: flex;
		}`
	);
	expect(result.warnings().length).toEqual(0);
});
