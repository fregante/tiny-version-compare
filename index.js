const split = v => String(v)
	.replace(/^\D+/, '') // Drop initial 'v' or 'r'
	.replace(/([a-z]+)/gi, '.$1.') // Sort each word separately
	.replace(/[-.]+/g, '.') // Consider dashes as separators (+ trim multiple separators)
	.split('.');

// Development versions are considered "negative",
// but localeCompare doesn't handle negative numbers.
// This offset is applied to reset the lowest development version to 0
const offset = part => {
	// Not numeric, return as is
	if (isNaN(part)) {
		return part;
	}

	return 4 + Number(part);
};

const parsePart = part => {
	// Missing, consider it zero
	if (typeof part === 'undefined') {
		return 0;
	}

	// Sort development versions
	switch (part.toLowerCase()) {
		case 'dev': return -4;
		case 'alpha': return -3;
		case 'beta': return -2;
		case 'rc': return -1;
		default:
	}

	// Return as is, it’s either a number or any text we can’t sort
	return part;
};

module.exports = (a, b) => {
	a = split(a);
	b = split(b);
	for (let i = 0; i < a.length || i < b.length; i++) {
		const ai = offset(parsePart(a[i]));
		const bi = offset(parsePart(b[i]));
		const sort = String(ai).localeCompare(bi, 'en', {
			numeric: true
		});

		// Once the difference is found,
		// stop comparing the rest of the parts
		if (sort !== 0) {
			return sort;
		}
	}

	// No difference found
	return 0;
};
