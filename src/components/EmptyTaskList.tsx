import { ImageIcon } from "./ImageIcon"

export const EmptyTaskList: React.FC<{}> = () => {
	return (
		<div className="text-center rounded-lg pt-20">
			<ImageIcon className="!w-20 !h-20 mx-auto" path="empty-folder.png" />
			<span>No Tasks</span>
		</div>
	)
}
