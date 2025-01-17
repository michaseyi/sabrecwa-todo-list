import { createContext } from "react"

type TaskContextData = {
	name: string
	setName: (name: string) => void
	deadline: Date
	setDeadline: (date: Date) => void
	comments: string[]
	comment: (comment: string) => void
	attachments: string[]
	attach: (attachment: string) => void
	tags: string[]
	addTag: (tag: string) => void
	removeTag: (tag: string) => void
	completed: boolean
	tick: () => void
	remove: () => void
}

export const TaskContext = createContext<TaskContextData>({} as TaskContextData)
