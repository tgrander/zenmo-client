module.exports = {
	extends: ['airbnb', 'prettier', 'prettier/react'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false },
		],
	},
	parser: 'babel-eslint',
	plugins: ['babel'],
};
