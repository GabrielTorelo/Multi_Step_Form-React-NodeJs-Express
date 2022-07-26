import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"

const App = () => {
	return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
	)
}

export default App
