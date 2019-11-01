const withSass = require("@zeit/next-sass");

module.exports = withSass({
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});
		config.node = {
			fs: "empty"
		};
		return config;
	},
	exportPathMap: function() {
		return {
			"/": { page: "/" }
		};
	}
});
