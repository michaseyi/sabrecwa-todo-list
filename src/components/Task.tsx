import { ImageIcon } from "./ImageIcon"
import { useTask } from "../hooks/useTask"
import { Checkmark } from "./Checkmark"
import { Tag } from "./Tag"
import { Dialog } from "./Dialog"
import { ViewTask } from "./ViewTask"
import { useState } from "react"

export type TagAccent = "pink" | "blue" | "green" | "yellow" | "red"

type TaskProps = {}

export const Task: React.FC<TaskProps> = ({}) => {
	const { name, comments, attachments, deadline, completed, tick, remove, tags } = useTask()

	const extras = [
		{
			type: "deadline",
			value: deadline.toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric",
			}),
			icon: "calendar.png",
		},

		{
			type: "comments",
			value: comments.length,
			icon: "chat.png",
		},
		{
			type: "attachments",
			value: attachments.length,
			icon: "attach.png",
		},
	]

	const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

	return (
		<div>
			<Dialog
				onClose={() => {
					setIsViewDialogOpen(false)
				}}
				open={isViewDialogOpen}
			>
				<ViewTask />
			</Dialog>

			<div
				onClick={() => setIsViewDialogOpen(true)}
				className={`border cursor-pointer shadow-sm hover:shadow-md rounded-md p-3 flex gap-x-3 md:gap-x-5 transition-all ${
					completed ? "bg-gray-100" : "bg-white"
				}`}
			>
				<Checkmark
					className="w-6 h-6"
					onChange={() => {
						tick()
					}}
					checked={completed}
				/>
				<div className="space-y-2 md:space-y-4 flex-1">
					<div className="flex justify-between">
						<div
							className={`font-medium text-lg leading-6 ${
								completed ? "text-gray-500 line-through" : ""
							}`}
						>
							{name}
						</div>

						<button
							className="hover:bg-gray-100 w-6 h-6 grid place-items-center rounded-full transition-colors"
							onClick={(e) => {
								e.stopPropagation()
								remove()
							}}
						>
							<ImageIcon className="w-4 h-4" path="delete.png" />
						</button>
					</div>
					{!completed && (
						<>
							<div className="flex gap-x-4 md:gap-x-5">
								{extras.map(({ icon, type, value }) => {
									return (
										<div className="flex items-center gap-x-1.5" key={type}>
											<ImageIcon path={icon} /> <span>{value}</span>
										</div>
									)
								})}
							</div>
							<div className="flex gap-x-2">
								{tags.map((tag) => (
									<Tag key={tag} name={tag} />
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
