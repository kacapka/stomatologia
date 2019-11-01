import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<html lang="pl">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;
