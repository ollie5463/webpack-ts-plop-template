module.exports = {
	presets: [
		'@babel/preset-typescript',
		[
			'@babel/preset-env',
			{
				modules: false,
				targets: '> 0.25%, not dead',
			},
		],
	],
	plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
};
