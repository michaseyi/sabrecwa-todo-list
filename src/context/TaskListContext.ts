import { createContext } from "react"

export type Task = {
	id: string
	name: string
	deadline: Date
	comments: string[]
	attachments: string[]
	tags: string[]
	completed: boolean
}

type TaskListContextData = {
	tasks: Task[]
	getTask: (id: string) => Task | undefined
	addTask: () => void
	removeTask: (id: string) => void
	setName: (id: string, name: string) => void
	setDeadline: (id: string, date: Date) => void
	comment: (id: string, comment: string) => void
	attach: (id: string, attachment: string) => void
	addTag: (id: string, tag: string) => void
	removeTag: (id: string, tag: string) => void
	tick: (id: string) => void
	filter: Partial<Task>
	setFilter: (filter: Partial<Task>) => void
}

export const TaskListContext = createContext<TaskListContextData>({} as TaskListContextData)
