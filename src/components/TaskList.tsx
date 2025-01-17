import { Task } from "./Task"
import { useTaskList } from "../hooks/useTaskList"
import { TaskContextProvider } from "../provider/TaskContextProvider"
import { EmptyTaskList } from "./EmptyTaskList"

export const TaskList: React.FC<{}> = () => {
	const { tasks } = useTaskList()
	return (
		<div className="space-y-3">
			{tasks.map((task) => (
				<TaskContextProvider task={task} key={task.id}>
					<Task />
				</TaskContextProvider>
			))}

			{tasks.length === 0 && <EmptyTaskList />}
		</div>
	)
}
