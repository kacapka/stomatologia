const withSass = require("@zeit/next-sass");

module.exports = withSass({
	// cssModules: false,
	// cssLoaderOptions: {
	// 	importLoaders: 1,
	// 	localIdentName: "[local]___[hash:base64:5]"
	// },
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});
		config.node = {
			fs: "empty"
		};
		return config;
	}
});
