import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

const App = () => {
	return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/perfil" element={<Profile />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
	)
}

export default App
