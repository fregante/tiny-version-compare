import test from 'ava';
import fn from '.';

const equivalentVersions = [
	'1',
	'v1',
	'r1',
	'1.0',
	'1.0.0',
	'1.0.0.0'
];

const versionPairs = [
	['1', '2'],
	['v1', '2'],
	['1.1', '1.2'],
	['1', '1.1'],
	['1', '1.0.1'],
	['2.0', '10.0'],
	['1.2.3', '1.22.3'],
	['1.1.1.1.1', '1.1.1.1.2'],
	['r1', 'r2']
];

const developmentVersionPairs = [
	['1.0-beta', '1.0'],
	['1.0-alpha', '1.0-beta'],
	['1.0-beta', '1.0-RC'],
	['1.0-beta2', '1.0-RC1'],
	['1.0-b2', '1.0-b3'],
	['1.0-a2', '1.0-b3'],
	['1.0-b2', '1.0-c3'],
	['1.0-beta2', '1.0-b3'],
	['1.0-alpha.1', '1.0-alpha.2'],
	['1.0-alpha1', '1.0-alpha2'],
	['v2.0-RC4', 'v2.0'],
	['v2.3.0-pre10', 'v2.3.0'],
	['vPR3', 'v2.3.4']
];

test('Equivalent versions', t => {
	t.deepEqual(equivalentVersions, equivalentVersions.sort(fn));
});

test('Simple numeric versions', t => {
	for (const [lower, higher] of versionPairs) {
		t.is(fn(lower, higher), -1);
		t.is(fn(higher, lower), 1);
		t.is(fn(higher, higher), 0);
		t.is(fn(lower, lower), 0);
	}
});

test('Development versions', t => {
	for (const [lower, higher] of developmentVersionPairs) {
		t.is(fn(lower, higher), -1);
		t.is(fn(higher, lower), 1);
		t.is(fn(higher, higher), 0);
		t.is(fn(lower, lower), 0);
	}
});
