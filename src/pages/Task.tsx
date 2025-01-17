import { AddTask } from "../components/AddTask"
import { Filter } from "../components/Filter"
import { TaskList } from "../components/TaskList"
import { TaskListContextProvider } from "../provider/TaskListContextProvider"

export default function Page() {
	return (
		<TaskListContextProvider>
			<main className="p-1 md:p-3 space-y-5 md:space-y-7">
				<h1 className="font-medium text-3xl md:text-4xl leading-none">To-Do</h1>
				<hr />
				<div className="flex gap-x-3">
					<AddTask />
					<Filter />
				</div>
				<TaskList />
			</main>
		</TaskListContextProvider>
	)
}
