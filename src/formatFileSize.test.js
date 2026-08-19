const assert = require('node:assert/strict');
const test = require('node:test');
const { formatFileSize } = require('./formatFileSize');

test('formats file sizes using binary units', () => {
	assert.equal(formatFileSize(0), '0.0B');
	assert.equal(formatFileSize(1024), '1.0KB');
	assert.equal(formatFileSize(1536), '1.5KB');
	assert.equal(formatFileSize(1024 ** 3), '1.0GB');
});
