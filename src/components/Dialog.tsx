import { useEffect, useRef } from "react"
import { ImageIcon } from "./ImageIcon"

type DialogProps = {
	children?: React.ReactNode
	open: boolean
	empty?: boolean
	onClose?: () => void
}

export const Dialog: React.FC<DialogProps> = ({ children, open, onClose, empty = false }) => {
	useEffect(() => {
		if (open) {
			window.document.body.style.overflow = "hidden"
		} else {
			window.document.body.style.overflow = "initial"
		}
	}, [open])

	const dialogContentRef = useRef<HTMLDivElement>(null)

	if (!open) {
		return <></>
	}

	return (
		<div
			onClick={(e) => {
				if (empty) {
					return
				}
				e.stopPropagation()
				if (!dialogContentRef.current) {
					return
				}

				if (!dialogContentRef.current.contains(e.target as Node)) {
					onClose && onClose()
				}
			}}
			className="fixed top-0 left-0 w-dvw h-dvh grid place-items-center z-[100]"
		>
			{!empty ? (
				<div ref={dialogContentRef} className="shadow-lg border p-3 rounded-xl relative bg-white">
					{children}
					<button
						onClick={() => {
							onClose && onClose()
						}}
						className="absolute top-2 right-2 hover:bg-gray-100 w-7 h-7 grid place-items-center rounded-full transition-colors"
					>
						<ImageIcon className="w-3.5 h-3.5" path="x.png" />
					</button>
				</div>
			) : (
				<>{children}</>
			)}
		</div>
	)
}
