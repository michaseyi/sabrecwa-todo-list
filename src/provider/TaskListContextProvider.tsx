import { useEffect, useMemo, useState } from "react"
import { Task, TaskListContext } from "../context/TaskListContext"
import { Loader } from "../components/Loader"
import { todos } from "../api/todos"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useToast } from "../hooks/useToast"

type TaskListContextProviderProps = {
	children?: React.ReactNode
}

export const TaskListContextProvider: React.FC<TaskListContextProviderProps> = ({ children }) => {
	const toast = useToast()

	const todoQuery = useQuery({ queryKey: ["todos"], queryFn: todos.get })

	const createTodoMutation = useMutation({
		mutationFn: todos.create,
		onSuccess: () => {
			todoQuery.refetch()
			toast.success("Task created")
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const removeTodoMutation = useMutation({
		mutationFn: todos.remove,
		onSuccess: () => {
			todoQuery.refetch()
			toast.success("Task removed")
		},

		onError: (error) => {
			toast.error(error.message)
		},
	})

	const modifyTodoMutation = useMutation({
		mutationFn: todos.update,
		onSuccess: () => {
			todoQuery.refetch()
			toast.success("Task updated")
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const isLoading =
		todoQuery.isLoading ||
		createTodoMutation.isPending ||
		removeTodoMutation.isPending ||
		modifyTodoMutation.isPending

	useEffect(() => {
		if (todoQuery.isError) {
			toast.error(todoQuery.error.message)
		}
	}, [todoQuery.isError])

	const tasks = todoQuery.data ?? []

	const [filter, setFilter] = useState<Partial<Task>>({})

	const filteredTasks = useMemo(
		() =>
			tasks.filter(
				(task) =>
					!Object.keys(filter).some((key) => {
						if (key === "tags") {
							return (filter.tags as string[]).some((tag) => !task.tags.includes(tag))
						}
						return task[key as keyof Task] !== filter[key as keyof Task]
					})
			),
		[filter, tasks]
	)

	function addTask() {
		createTodoMutation.mutate({
			attachments: [],
			comments: [],
			deadline: new Date(),
			name: "Untitled Task",
			tags: [],
			id: Math.random().toString(36).slice(2, 9),
			completed: false,
		})
	}

	function removeTask(id: string) {
		removeTodoMutation.mutate(id)
	}

	function comment(id: string, newComment: string) {
		const task = tasks.find((task) => task.id === id)
		if (!task) {
			return
		}
		modifyTodoMutation.mutate({ id, data: { comments: [newComment, ...task.comments] } })
	}

	function addTag(id: string, tag: string) {
		const task = tasks.find((task) => task.id === id)
		if (!task) {
			return
		}
		if (task.tags.includes(tag)) {
			return
		}
		modifyTodoMutation.mutate({ id, data: { tags: [tag, ...task.tags] } })
	}

	function removeTag(id: string, tag: string) {
		const task = tasks.find((task) => task.id === id)
		if (!task) {
			return
		}
		if (!task.tags.includes(tag)) {
			return
		}
		modifyTodoMutation.mutate({ id, data: { tags: task.tags.filter((t) => t !== tag) } })
	}

	function attach(id: string, attachment: string) {
		const task = tasks.find((task) => task.id === id)
		if (!task) {
			return
		}
		if (task.attachments.includes(attachment)) {
			return
		}
		modifyTodoMutation.mutate({ id, data: { attachments: [attachment, ...task.attachments] } })
	}

	function tick(id: string) {
		const task = tasks.find((task) => task.id === id)
		if (!task) {
			return
		}
		modifyTodoMutation.mutate({ id, data: { completed: !task.completed } })
	}

	function setName(id: string, name: string) {
		modifyTodoMutation.mutate({ id, data: { name } })
	}

	function setDeadline(id: string, deadline: Date) {
		modifyTodoMutation.mutate({ id, data: { deadline } })
	}

	function getTask(id: string) {
		return tasks.find((task) => task.id === id)
	}

	return (
		<TaskListContext.Provider
			value={{
				addTask,
				tasks: filteredTasks,
				removeTask,
				comment,
				addTag,
				removeTag,
				attach,
				tick,
				setDeadline,
				setName,
				getTask,
				filter,
				setFilter,
			}}
		>
			<>
				{children}
				<Loader open={isLoading} />
			</>
		</TaskListContext.Provider>
	)
}
