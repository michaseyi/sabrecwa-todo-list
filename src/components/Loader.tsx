import { Dialog } from "./Dialog"

type LoaderProps = {
	open: boolean
}

export const Loader: React.FC<LoaderProps> = ({ open }) => {
	return (
		<Dialog empty={true} open={open}>
			<div className="bg-white p-5 rounded-lg shadow-lg border">
				<div className="mx-auto w-10 h-10 animate-spin border-2 rounded-full border-black text-black font-bold">
					...
				</div>
			</div>
		</Dialog>
	)
}
