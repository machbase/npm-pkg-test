/**
 * @machbase/npm-pkg-test
 * Test package for GitHub Packages deployment
 */

function greet(name = 'World') {
  return `Hello, ${name}! This is @machbase/npm-pkg-test package.`;
}

function getVersion() {
  const pkg = require('./package.json');
  return pkg.version;
}

function add(a, b) {
  return a + b;
}

module.exports = {
  greet,
  getVersion,
  add
};

// Run test when executed directly
if (require.main === module) {
  console.log(greet());
  console.log(`Version: ${getVersion()}`);
  console.log(`1 + 2 = ${add(1, 2)}`);
}
