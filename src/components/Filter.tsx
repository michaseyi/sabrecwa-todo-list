import { useState } from "react"
import { useTaskList } from "../hooks/useTaskList"
import { ImageIcon } from "./ImageIcon"
import { Dialog } from "./Dialog"
import { Task } from "../context/TaskListContext"
import { Checkmark } from "./Checkmark"

export function Filter() {
	const { setFilter, filter } = useTaskList()

	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [tags, setTags] = useState<string | undefined>(filter.tags?.join(","))
	const [completed, setCompleted] = useState<boolean | undefined>(filter.completed)

	const applyFilter = () => {
		const newFilter: Partial<Task> = {}
		if (completed !== undefined) {
			newFilter.completed = completed
		}
		if (tags !== undefined) {
			newFilter.tags = tags.split(",").map((tag) => tag.trim())
		}
		setFilter(newFilter)
		setIsDialogOpen(false)
	}

	function clearFilter() {
		setTags(undefined)
		setCompleted(undefined)
		setFilter({})
		setIsDialogOpen(false)
	}

	function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		applyFilter()
	}

	return (
		<div>
			<button
				onClick={() => {
					setIsDialogOpen(true)
				}}
				className="border py-2 px-4 rounded-xl font-medium flex items-center gap-x-3"
			>
				<ImageIcon className="w-4 h-4" path="filter.png" /> Filters ({Object.keys(filter).length})
			</button>

			<Dialog
				onClose={() => {
					setIsDialogOpen(false)
				}}
				open={isDialogOpen}
			>
				<form onSubmit={handleFormSubmit} className="p-4 space-y-4">
					<h2 className="text-lg font-medium mb-4">Filters</h2>
					<div className="mb-4">
						<label className="block mb-2">Tags (comma separated)</label>
						<input
							type="text"
							value={tags}
							onChange={(e) => setTags(e.target.value)}
							className="border rounded px-2 py-1 w-full"
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-2">Completed</label>
						<div className="flex items-center gap-x-2">
							<Checkmark
								className="w-4 h-4"
								checked={completed}
								onChange={(c) => setCompleted(c)}
							/>
							<span>Show only completed tasks</span>
						</div>
					</div>
					<div className="space-y-2">
						<button
							type="button"
							onClick={clearFilter}
							className="border border-red-900 bg-red-100 hover:bg-red-200 text-red-900 py-2 px-4 rounded-lg font-medium w-full"
						>
							Clear Filter
						</button>
						<button
							type="submit"
							className="bg-indigo-900 text-white py-2 px-4 rounded-lg font-medium w-full"
						>
							Apply Filter
						</button>
					</div>
				</form>
			</Dialog>
		</div>
	)
}
