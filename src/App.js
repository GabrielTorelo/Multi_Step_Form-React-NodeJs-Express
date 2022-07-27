import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import Perfil from "./pages/Perfil"

const App = () => {
	return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/perfil" element={<Perfil />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
	)
}

export default App
