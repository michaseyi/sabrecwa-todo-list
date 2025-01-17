import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Task from "./pages/Task"
import NotFound from "./pages/NotFound"
import { Layout } from "./components/Layout"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/about" element={<About />} />
					<Route path="/" element={<Navigate to="/tasks" replace />} />
					<Route path="/tasks" element={<Task />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
