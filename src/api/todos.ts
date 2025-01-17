import { Task } from "../context/TaskListContext"

// This is a mock todos API that uses localStorage to store tasks
export const todos = {
	create: async (data: Partial<Task>): Promise<Task> => {
		return new Promise((res) => {
			setTimeout(() => {
				const tasks = localStorage.getItem("tasks")
				const newTask = { ...data, id: Math.random().toString(36).slice(2, 9) }
				if (tasks) {
					const parsed = JSON.parse(tasks)
					localStorage.setItem("tasks", JSON.stringify([newTask, ...parsed]))
				} else {
					localStorage.setItem("tasks", JSON.stringify([newTask]))
				}
				res(newTask as Task)
			}, 300)
		})
	},
	get: async (): Promise<Task[]> => {
		return new Promise((res) => {
			setTimeout(() => {
				const tasks = localStorage.getItem("tasks")
				res(
					tasks
						? (JSON.parse(tasks) as Task[]).map((task) => ({
								...task,
								deadline: new Date(task.deadline),
						  }))
						: []
				)
			}, 300)
		})
	},
	remove: async (id: string) => {
		return new Promise((res) => {
			setTimeout(() => {
				const tasks = localStorage.getItem("tasks")
				if (tasks) {
					const parsed = JSON.parse(tasks)
					const filtered = parsed.filter((task: Task) => task.id !== id)
					localStorage.setItem("tasks", JSON.stringify(filtered))
					res(void 0)
				}
			}, 300)
		})
	},
	update: async (variables: { id: string; data: Partial<Task> }) => {
		const { id, data } = variables
		return new Promise((res) => {
			setTimeout(() => {
				const tasks = localStorage.getItem("tasks")
				if (tasks) {
					const parsed = JSON.parse(tasks)
					const updated = parsed.map((task: Task) => {
						if (task.id === id) {
							return { ...task, ...data }
						}
						return task
					})
					localStorage.setItem("tasks", JSON.stringify(updated))
					res(void 0)
				}
			}, 300)
		})
	},

	empty: async () => {
		return new Promise((res) => {
			setTimeout(() => {
				localStorage.removeItem("tasks")
				res(void 0)
			}, 300)
		})
	},
}
