import postcss from 'postcss';

const plugin = require('./');

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
            display: flex;
        }`,
		`a {
            -js-display: flex;
            display: flex;
        }`
	);
});

test('Add "-js-display: inline-flex" if "display: inline-flex" present', () => {
	return run(
		`a {
			display: inline-flex;
		}`,
		`a {
			-js-display: inline-flex;
			display: inline-flex;
		}`
	);
});

test('Don\'t add "-js-display: flex" if it\'s already exist', () => {
	return run(
		`a {
			-js-display: flex;
			display: flex;
		}`,
		`a {
			-js-display: flex;
			display: flex;
		}`
	);
});

test('Don\'t add "-js-display: flex" if comment "flexibility-disable" is exist', () => {
	return run(
		`a {
			/* flexibility-disable */
			display: flex;
		}`,
		`a {
			/* flexibility-disable */
			display: flex;
		}`
	);
});

test('Don\'t add "-js-display: flex" if comment "! flexibility-disable" is exist', () => {
	return run(
		`a {
			/*! flexibility-disable */
			display: flex;
		}`,
		`a {
			/*! flexibility-disable */
			display: flex;
		}`
	);
});

test('Don\'t add "-js-display: flex" for prefixed version', () => {
	return run(
		`a {
			display: -webkit-flex;
			display: flex;
		}
		b {
			display: -moz-inline-flex;
			display: inline-flex;
		}`,
		`a {
			display: -webkit-flex;
			-js-display: flex;
			display: flex;
		}
		b {
			display: -moz-inline-flex;
			-js-display: inline-flex;
			display: inline-flex;
		}`
	);
});
