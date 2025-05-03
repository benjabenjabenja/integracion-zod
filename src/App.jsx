import { useState } from 'react'
//Router:
import { BrowserRouter } from 'react-router'
//Routes:
import AppRoutes from './router/routes'
//Styles:
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App
