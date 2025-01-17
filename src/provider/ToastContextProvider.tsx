import { useRef } from "react"
import { ToastContext } from "../context/ToastContext"

type ToastContextProviderProps = {
	children?: React.ReactNode
}

export const ToastContextProvider: React.FC<ToastContextProviderProps> = ({ children }) => {
	const containerRef = useRef<HTMLDivElement>(null)

	function error(message: string) {
		if (!containerRef.current) {
			return
		}
		const toast = document.createElement("div")
		toast.className = "border border-red-900 bg-red-200 text-red-900 p-3 rounded-lg w-60"
		toast.textContent = message
		containerRef.current.appendChild(toast)
		setTimeout(() => {
			toast.remove()
		}, 2000)
	}

	function success(message: string) {
		if (!containerRef.current) {
			return
		}
		const toast = document.createElement("div")

		toast.className = "border border-green-900 bg-green-200 text-green-900 p-3 rounded-lg w-60"
		toast.textContent = message
		containerRef.current.appendChild(toast)
		setTimeout(() => {
			toast.remove()
		}, 2000)
	}
	return (
		<ToastContext.Provider value={{ error, success }}>
			{children}
			<div ref={containerRef} className="fixed top-0 right-0 p-4 space-y-1"></div>
		</ToastContext.Provider>
	)
}
