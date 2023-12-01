import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/normalize.css";
import "./styles/main.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);