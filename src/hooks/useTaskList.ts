import { useContext } from "react"
import { TaskListContext } from "../context/TaskListContext"

export function useTaskList() {
	return useContext(TaskListContext)
}
