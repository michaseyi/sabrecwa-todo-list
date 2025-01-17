import { TaskContext } from "../context/TaskContext"
import { Task } from "../context/TaskListContext"
import { useTaskList } from "../hooks/useTaskList"

type TaskContextProviderProps = {
	children?: React.ReactNode
	task: Task
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({ children, task }) => {
	const { comment, addTag, removeTag, attach, tick, setName, setDeadline, removeTask } =
		useTaskList()

	function commentOnTask(newComment: string) {
		comment(task.id, newComment)
	}

	function addTagOnTask(tag: string) {
		addTag(task.id, tag)
	}

	function removeTagOnTask(tag: string) {
		removeTag(task.id, tag)
	}

	function addAttachmentOnTask(attachment: string) {
		attach(task.id, attachment)
	}

	function toggleTask() {
		tick(task.id)
	}

	function updateName(newName: string) {
		setName(task.id, newName)
	}

	function updateDeadline(newDeadline: Date) {
		setDeadline(task.id, newDeadline)
	}

	function remove() {
		removeTask(task.id)
	}

	return (
		<TaskContext.Provider
			value={{
				...task,
				remove,
				setName: updateName,
				setDeadline: updateDeadline,
				comment: commentOnTask,
				addTag: addTagOnTask,
				removeTag: removeTagOnTask,
				attach: addAttachmentOnTask,
				tick: toggleTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	)
}
