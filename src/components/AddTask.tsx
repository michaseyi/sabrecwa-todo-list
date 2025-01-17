import { useTaskList } from "../hooks/useTaskList"
import { ImageIcon } from "./ImageIcon"

export function AddTask() {
	const { addTask } = useTaskList()

	return (
		<button
			onClick={() => {
				addTask()
			}}
			className="bg-indigo-900 text-white py-2 px-4 rounded-xl font-medium flex items-center gap-x-3"
		>
			<ImageIcon className="w-4 h-4" path="plus.png" /> New Task
		</button>
	)
}
