# @machbase/npm-pkg-test

Test npm package for GitHub Packages deployment.

## Installation

### 1. Configure .npmrc

Create a `.npmrc` file in your project root or home directory:

```
@machbase:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> **Note**: Replace `YOUR_GITHUB_TOKEN` with a GitHub Personal Access Token that has `read:packages` permission.

### 2. Install package

```bash
npm install @machbase/npm-pkg-test
```

## Usage

```javascript
const { greet, getVersion, add } = require('@machbase/npm-pkg-test');

console.log(greet('Machbase'));  // Hello, Machbase! This is @machbase/npm-pkg-test package.
console.log(getVersion());       // 1.0.0
console.log(add(1, 2));          // 3
```

## API

### `greet(name?: string): string`
Returns a greeting message.

### `getVersion(): string`
Returns the package version.

### `add(a: number, b: number): number`
Returns the sum of two numbers.

## License

MIT
