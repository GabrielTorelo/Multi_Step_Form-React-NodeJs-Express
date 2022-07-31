import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Menu from "./components/default/Menu"
import Footer from "./components/default/Footer"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Menu />
		<App />
		<Footer />
	</React.StrictMode>
)
