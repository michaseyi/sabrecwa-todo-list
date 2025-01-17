import { ImageIcon } from "../components/ImageIcon"

export default function NotFound() {
	return (
		<main>
			<div className="text-center rounded-lg pt-20">
				<ImageIcon className="!w-20 !h-20 mx-auto" path="empty-folder.png" />
				<span>Oops! page not found</span>
			</div>
		</main>
	)
}
