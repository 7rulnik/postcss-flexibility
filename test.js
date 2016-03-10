import postcss from 'postcss';
import test from 'ava';

import plugin from './';

function run(t, input, output) {
	return postcss([plugin()]).process(input)
		.then(result => {
			t.same(result.css, output);
			t.same(result.warnings().length, 0);
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
