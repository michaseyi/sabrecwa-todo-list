import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export function useTask() {
	return useContext(TaskContext)
}
