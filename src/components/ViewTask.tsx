import { useState } from "react"
import { useTask } from "../hooks/useTask"
import { Tag } from "./Tag"

type ViewTaskProp = {}

export const ViewTask: React.FC<ViewTaskProp> = ({}) => {
	const { name, setName, comments, comment, tags, addTag, removeTag, deadline, setDeadline } =
		useTask()
	const [newComment, setNewComment] = useState("")
	const [newTag, setNewTag] = useState("")
	const [newName, setNewName] = useState(name)

	const handleAddComment = () => {
		if (newComment.trim()) {
			comment(newComment)
			setNewComment("")
		}
	}

	const handleAddTag = () => {
		if (newTag.trim()) {
			addTag(newTag)
			setNewTag("")
		}
	}

	return (
		<div className="p-4 space-y-4 w-full max-w-xs md:max-w-lg">
			<div>
				<label className="block text-lg font-medium mb-2">Name</label>
				<input
					type="text"
					value={newName}
					onChange={(e) => setNewName(e.target.value)}
					onBlur={() => setName(newName)}
					className="border rounded px-2 py-1 w-full"
				/>
			</div>

			<div>
				<label className="block text-lg font-medium mb-2">Deadline</label>
				<input
					type="date"
					value={deadline.toISOString().split("T")[0]}
					onChange={(e) => setDeadline(new Date(e.target.value))}
					className="border rounded px-2 py-1 w-full"
				/>
			</div>

			<div>
				<label className="block text-lg font-medium mb-2">Comments</label>
				<ul className="list-disc list-inside space-y-2 mb-2 max-h-32 md:max-h-80 overflow-auto">
					{comments.map((note, index) => (
						<li key={index}>{note}</li>
					))}
				</ul>
				<div className="flex flex-col md:flex-row gap-2">
					<input
						type="text"
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
						className="border rounded px-2 py-1 flex-1"
						placeholder="Add a comment"
					/>
					<button onClick={handleAddComment} className="bg-indigo-900 text-white px-4 py-2 rounded">
						Comment
					</button>
				</div>
			</div>

			<div>
				<label className="block text-lg font-medium mb-2">Tags</label>
				<div className="flex flex-wrap gap-2 mb-2  max-h-24 md:max-h-40 overflow-auto">
					{tags.map((tag) => (
						<button
							key={tag}
							onClick={() => removeTag(tag)}
							className="text-red-500 hover:text-red-700"
						>
							<Tag name={tag} />
						</button>
					))}
				</div>
				<div className="flex flex-col md:flex-row gap-2">
					<input
						type="text"
						value={newTag}
						onChange={(e) => setNewTag(e.target.value)}
						className="border rounded px-2 py-1 flex-1"
						placeholder="Add a tag"
					/>
					<button onClick={handleAddTag} className="bg-indigo-900 text-white px-4 py-2 rounded">
						Add Tag
					</button>
				</div>
			</div>
		</div>
	)
}
