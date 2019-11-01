const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://www.drseroka.pl",
	pagesDirectory: __dirname + "/pages",
	targetDirectory: "static/"
});
