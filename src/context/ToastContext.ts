import { createContext } from "react"

type ToastContextData = {
	error: (message: string) => void
	success: (message: string) => void
}

export const ToastContext = createContext<ToastContextData>({} as ToastContextData)
