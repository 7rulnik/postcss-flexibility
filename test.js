import postcss from 'postcss';
import test from 'ava';

import plugin from './';

function run(t, input, output) {
	return postcss([plugin()]).process(input)
		.then(result => {
			t.deepEqual(result.css, output);
			t.deepEqual(result.warnings().length, 0);
		});
}

test('Add "-js-display: flex" if "display: flex" present', t => {
	return run(
		t,
		`a {
			display: flex;
		}`,
		`a {
			-js-display: flex;
			display: flex;
		}`
	);
});

test('Add "-js-display: inline-flex" if "display: inline-flex" present', t => {
	return run(
		t,
		`a {
			display: inline-flex;
		}`,
		`a {
			-js-display: inline-flex;
			display: inline-flex;
		}`
	);
});

test('Don\'add "-js-display: flex" if it\'s already exist', t => {
	return run(
		t,
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

test('Don\'add "-js-display: flex" if comment "flexibility-disable" is exist', t => {
	return run(
		t,
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

test('Don\'add "-js-display: flex" if comment "! flexibility-disable" is exist', t => {
	return run(
		t,
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
